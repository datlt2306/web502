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
            const cart = (await queryClient.getQueryData(["cart"])) || [];
            const existingItemIndex = (cart as any[]).findIndex(
                (cartItem) => cartItem.userId === newItem.userId
            );

            if (existingItemIndex !== -1) {
                // Nếu đơn hàng của người dùng đã tồn tại, tiến hành cập nhật giỏ hàng
                const updatedCart = [...(cart as any)]; // Sao chép mảng giỏ hàng để tránh thay đổi trực tiếp dữ liệu ban đầu
                const existingProductIndex = updatedCart[existingItemIndex].items.findIndex(
                    (item: any) => item.id === newItem.items[0].id
                );

                if (existingProductIndex !== -1) {
                    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng
                    updatedCart[existingItemIndex].items[existingProductIndex].quantity +=
                        newItem.items[0].quantity;
                } else {
                    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào mảng sản phẩm
                    updatedCart[existingItemIndex].items.push(newItem.items[0]);
                }

                // Gửi yêu cầu cập nhật giỏ hàng lên server
                await axios.put(
                    `http://localhost:3000/cart/${updatedCart[existingItemIndex].id}`,
                    updatedCart[existingItemIndex]
                );

                // Cập nhật dữ liệu trong bộ nhớ cache
                queryClient.setQueryData(["cart"], updatedCart);
            } else {
                // Nếu đơn hàng của người dùng chưa tồn tại, tiến hành tạo mới giỏ hàng
                const newCart = {
                    userId: newItem.userId,
                    items: newItem.items,
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

    console.log(data);
    return (
        <>
            <button
                onClick={() =>
                    mutation.mutate({
                        userId: 2,
                        items: [
                            {
                                id: 2,
                                quantity: 1,
                                image: "",
                                price: 0,
                                name: "Sản phẩm C",
                            },
                        ],
                    })
                }
            >
                Add to cart
            </button>
            {data?.map((cartItem: any) => (
                <div key={cartItem.id}>
                    {cartItem.items.map((item: any) => (
                        <div key={item.id}>{item.name}</div>
                    ))}
                </div>
            ))}
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
