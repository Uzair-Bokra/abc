// 'use client';

// import React from "react";
// import Image from "next/image";
// import SocialIcon from "@/components/SocialIcon/SocialIcon";
// import Swal from "sweetalert2";

// type Product = {
//   name: string;
//   price: number;
//   imageUrl: string;
//   originalPrice?: number;
//   id: number;
// };

// const ShopItemClient = ({ product }: { product: Product }) => {
//   const addToCart = (product: Product) => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     const updatedCart = [...cartItems, product];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     Swal.fire({
//       title: "<strong>🎉 Congratulations!</strong>",
//       html: "Your item has been added to the cart successfully!",
//       icon: "success",
//       confirmButtonText: "Awesome!",
//       buttonsStyling: false,
//       customClass: {
//         popup: "custom-popup",
//         title: "custom-title",
//         htmlContainer: "custom-text",
//         confirmButton: "custom-button",
//       },
//     });
//   };

//   return (
//     <div>
//       {/* Product page layout */}
//       <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
//         <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
//           {[1, 2, 3].map((index) => (
//             <div key={index}>
//               <Image
//                 src={product.imageUrl || `/img/placeholder.svg`}
//                 alt={product.name}
//                 width={132}
//                 height={129}
//               />
//             </div>
//           ))}
//           <div className="col-span-3 row-span-4">
//             <Image
//               src={product.imageUrl || `/img/placeholder.svg`}
//               alt={product.name}
//               width={491}
//               height={596}
//             />
//           </div>
//         </div>

//         <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
//           <div className="px-4 py-2">
//             <span className="inline-block bg-primary_color text-white text-xs font-semibold px-2 py-1 rounded-full">
//               In stock
//             </span>
//           </div>
//           <div className="px-4 pb-15 text-black border-b border-gray-400">
//             <h2 className="text-5xl font-bold max-sm:text-2xl">{product.name}</h2>
//             <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               diam pellentesque bibendum non dui volutpat fringilla bibendum.
//             </p>
//           </div>
//           <div className="px-4 py-2">
//             <div className="flex flex-col justify-between">
//               <span className="text-3xl font-bold">${product.price}</span>
//               <div className="flex items-center">
//                 <span className="text-primary_color text-xl mr-1">★★★★★</span>
//                 <span className="text-gray-600 text-sm">| 5 rating | 22 Reviews</span>
//               </div>
//             </div>
//           </div>
//           <div className="px-4 py-4">
//             <div className="flex items-center">
//               <button
//                 className="ml-4 px-4 py-2 h-[50px] bg-orange-400 text-white text-sm font-medium rounded-md hover:bg-orange-600"
//                 onClick={() => addToCart(product)}
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//           <div className="px-4 py-2">
//             <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4">
//               <span>
//                 Category: <strong>Pizza</strong>
//               </span>
//               <span>
//                 Tag: <strong>Our Shop</strong>
//               </span>
//             </div>
//           </div>
//           <div className="w-full items-start">
//             <SocialIcon />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopItemClient;





































// 'use client';

// import React from "react";
// import Image from "next/image";
// import SocialIcon from "@/components/SocialIcon/SocialIcon";
// import Swal from "sweetalert2";

// type Product = {
//   name: string;
//   price: number;
//   imageUrl: string;
//   originalPrice?: number;
//   id: number;
// };

// const ShopItemClient = ({ product }: { product: Product }) => {
//   const addToCart = (product: Product) => {
//     const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
//     const updatedCart = [...cartItems, product];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));

//     Swal.fire({
//       title: "🎉 Congratulations!",
//       html: "Your item has been added to the cart successfully!",
//       icon: "success",
//       confirmButtonText: "Awesome!",
//       buttonsStyling: false,
//       customClass: {
//         popup: "custom-popup",
//         title: "custom-title",
//         htmlContainer: "custom-text",
//         confirmButton: "custom-button",
//       },
//     });
//   };

//   return (
//     <div>
//       <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
//         <div className="left grid grid-cols-4 grid-rows-4 gap-2 max-xl:w-full">
//           {[product.imageUrl, product.imageUrl, product.imageUrl].map((src, index) => (
//             <div key={index} className="cursor-pointer">
//               <Image src={src} alt={product.name} width={132} height={129} />
//             </div>
//           ))}
//           <div className="col-span-3 row-span-4">
//             <Image src={product.imageUrl} alt={product.name} width={491} height={596} />
//           </div>
//         </div>

//         <div className="w-[50%] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
//           <div className="px-4 py-2">
//             <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//               In stock
//             </span>
//           </div>
//           <div className="px-4 pb-5 text-black border-b border-gray-400">
//             <h2 className="text-5xl font-bold max-sm:text-2xl">{product.name}</h2>
//             <p className="text-gray-600 w-full text-lg mt-5 pb-5 max-sm:text-sm">
//               A delicious and authentic dish with premium ingredients to satisfy your cravings.
//             </p>
//           </div>
//           <div className="px-4 py-2 flex flex-col gap-2">
//             <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
//             <div className="flex items-center gap-2">
//               <span className="text-yellow-500 text-xl">★★★★★</span>
//               <span className="text-gray-600 text-sm">5.0 Rating | 22 Reviews</span>
//             </div>
//           </div>
//           <div className="px-4 py-4">
//             <button
//               className="w-full px-4 py-3 bg-orange-500 text-white text-lg font-medium rounded-md hover:bg-orange-600"
//               onClick={() => addToCart(product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//           <div className="px-4 py-2 text-sm text-gray-600 flex flex-col gap-2">
//             <span>Category: <strong>Noodles</strong></span>
//             <span>Tag: <strong>Japanese Food</strong></span>
//           </div>
//           <div className="w-full px-4 py-2">
//             <SocialIcon />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopItemClient;






























































'use client';

import React, { useState } from "react";
import Image from "next/image";
import SocialIcon from "@/components/SocialIcon/SocialIcon";
import Swal from "sweetalert2";

type Product = {
  name: string;
  price: number;
  imageUrl: string;
  originalPrice?: number;
  id: number;
};

const ShopItemClient = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cartItems, { ...product, quantity }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire({
      title: "<strong>🎉 Congratulations!</strong>",
      html: "Your item has been added to the cart successfully!",
      icon: "success",
      confirmButtonText: "Awesome!",
      buttonsStyling: false,
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        htmlContainer: "custom-text",
        confirmButton: "custom-button",
      },
    });
  };

  return (
    <div>
      <div className="section1 w-[80%] m-auto py-20 flex justify-between max-xl:w-[95%] max-xl:flex-col items-center">
        <div className="left flex flex-col items-center max-xl:w-full">
          <div className="w-[491px] h-[596px]">
            <Image
              src={product.imageUrl || `/img/placeholder.svg`}
              alt={product.name}
              width={491}
              height={596}
            />
          </div>
        </div>

        <div className="w-[50%] h-[718px] flex flex-col justify-between max-xl:pt-10 max-xl:w-full">
          <div className="px-4 py-2">
            <span className="inline-block bg-primary_color text-white text-xs font-semibold px-2 py-1 rounded-full">
              In stock
            </span>
          </div>
          <div className="px-4 pb-15 text-black border-b border-gray-400">
            <h2 className="text-5xl font-bold max-sm:text-2xl">{product.name}</h2>
            <p className="text-gray-600 w-[608px] text-lg mt-5 pb-16 max-sm:w-full max-sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
          </div>
          <div className="px-4 py-2">
            <div className="flex flex-col justify-between">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                <span className="text-primary_color text-xl mr-1">★★★★★</span>
                <span className="text-gray-600 text-sm">| 5 rating | 22 Reviews</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center">
              <button
                className="px-4 py-2 bg-gray-300 text-black text-sm font-medium rounded-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="mx-4 text-xl">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-300 text-black text-sm font-medium rounded-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <button
                className="ml-4 px-4 py-2 h-[50px] bg-orange-400 text-white text-sm font-medium rounded-md hover:bg-orange-600"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="px-4 py-2">
            <div className="text-sm text-gray-600 flex flex-wrap flex-col gap-4">
              <span>
                Category: <strong>Ramen</strong>
              </span>
              <span>
                Tag: <strong>Our Shop</strong>
              </span>
            </div>
          </div>
          <div className="w-full items-start">
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItemClient;
