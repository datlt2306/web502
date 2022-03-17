import React from "react";
import { Product } from "../types/product";
//rafce : Tạo 1 components template giống với tên file.tsx
type ShowInfoProps = {
    person: Product
}

const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
    
    return (
        <div>ShowInfo</div>
    )
}
export default ShowInfo;