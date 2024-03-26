/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function App() {
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ["cart"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/cart`);
            return data;
        },
    });
    const mutation = useMutation({
        mutationFn: async (newItem: any) => {
            const cart: any[] = queryClient.getQueryData(["cart"]) || [];
            const existingItemIndex = cart.findIndex(
                (cartItem) => cartItem.userId === newItem.userId
            );

            if (existingItemIndex !== -1) {
                // Nếu đơn hàng của người dùng đã tồn tại, tiến hành cập nhật giỏ hàng
                const existingProductIndex = cart[existingItemIndex].items.findIndex(
                    (item: any) => item.id === newItem.item.id
                );

                if (existingProductIndex !== -1) {
                    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
                    cart[existingItemIndex].items[existingProductIndex].quantity +=
                        newItem.item.quantity;
                } else {
                    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào mảng sản phẩm
                    cart[existingItemIndex].items.push(newItem.item);
                }

                // Gửi yêu cầu cập nhật giỏ hàng lên server
                await axios.put(
                    `http://localhost:3000/cart/${cart[existingItemIndex].id}`,
                    cart[existingItemIndex]
                );

                // Cập nhật dữ liệu trong bộ nhớ cache
                queryClient.setQueryData(["cart"], cart);
            } else {
                // Nếu đơn hàng của người dùng chưa tồn tại, tiến hành tạo mới giỏ hàng
                const newCart = {
                    userId: newItem.userId,
                    item: newItem.items,
                };

                // Gửi yêu cầu tạo mới giỏ hàng lên server
                await axios.post(`http://localhost:3000/cart`, newCart);

                // Cập nhật dữ liệu trong bộ nhớ cache
                queryClient.setQueryData(["cart"], [...(cart as any), newCart]);
            }
        },
        onSuccess: () => {
            // Khi mutation thành công, làm mới dữ liệu giỏ hàng
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },
    });

    return (
        <>
            <button
                onClick={() =>
                    mutation.mutate({
                        userId: 2,
                        item: {
                            id: 2,
                            quantity: 1,
                            image: "",
                            price: 0,
                            name: "Sản phẩm C",
                        },
                    })
                }
            >
                Add to cart
            </button>
            {data?.map((cartItem: any) => {
                // Kiểm tra nếu cartItem có userId khớp với userId bạn muốn hiển thị
                if (cartItem.userId === 1) {
                    return (
                        <div key={cartItem.id}>
                            {cartItem.items.map((item: any) => (
                                <div key={item.id}>
                                    {item.name} - {item.quantity}
                                </div>
                            ))}
                        </div>
                    );
                }
                return `Không có sản phẩm nào`; // Nếu userId không khớp, trả về null để không render gì cả
            })}

            {/* <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    <Route index element={<ProductList />} />
                </Route>
                <Route path="admin" element={<AdminLayout />}>
                    <Route index element={<h1>Dashboard Page</h1>} />
                    <Route path="products" element={<h1>Product Management</h1>} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
            </Routes> */}
        </>
    );
}
export default App;
