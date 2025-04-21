// "use client";

// import { useEffect, useState } from "react";
// import { Playfair } from "next/font/google"
// import { useSession } from "next-auth/react";

// const playfair = Playfair({
//     subsets: ["latin"],
//     weight: ['400', '600'],
//     display: "swap",
// });

// function MenuItems({
//     category_name,
//     title,
//     getFunctionName,
//     rupeeSymbol
// }) {
//     // const [quantities, setQuantities] = useState({});
//     // const [userId, setUserId] = useState(null);

//     // useEffect(() => {
//     //     async function fetchUserId() {
//     //         const res = await fetch('/api/get-user-id');
//     //         const data = await res.json();
//     //         setUserId(data.user_id);
//     //     };
//     //     fetchUserId();
//     // }, []);

//     // async function fetchUserId() {
//     //     const res = await fetch('/api/get-user-id');
//     //     const data = await res.json();
//     //     setUserId(data.user_id);
//     // }

//     // fetchUserId()

//     // const updateCart = async (item, qty) => {
//     //     if (!userId) {
//     //         alert("You must be logged in to add items to the cart.");
//     //         return;
//     //     }

//     //     setQuantities(prev => ({
//     //         ...prev,
//     //         [item.item_id]: qty
//     //     }));

//     //     await fetch('/api/cart', {
//     //         method: 'POST',
//     //         body: JSON.stringify({
//     //             user_id: userId,
//     //             item_id: item.item_id,
//     //             quantity: qty,
//     //             price: item.price * qty
//     //         }),
//     //         headers: {
//     //             'Content-Type': 'application/json'
//     //         },
//     //     });
//     // };

//     // const handleAdd = (item) => updateCart(item, 1);
//     // const handleIncrease = (item) => updateCart(item, quantities[item.item_id] + 1);
//     // const handleDecrease = (item) => {
//     //     const newQuantity = quantities[item.item_id] - 1;
//     //     if (newQuantity === 0)
//     //         updateCart(item, 0);
//     //     else
//     //         updateCart(item, newQuantity);
//     // };

//     return (
//         <>
//             <h2
//                 className={`text-4xl font-semibold text-center ${playfair.className}`}
//                 id={category_name}
//             >
//                 {title}
//             </h2>
//             <hr />
//             <div
//                 className="flex flex-wrap"
//             >
//                 {getFunctionName.map((item) => (
//                         <div
//                             className="w-1/4 p-2"
//                             key={item.item_id}
//                         >
//                             <div
//                                 className="flex flex-row rounded-2xl shadow-md overflow-hidden"
//                             >
//                                 <div
//                                     className="flex flex-col p-4 justify-between"
//                                 >
//                                     <h3
//                                         className="text-lg font-semibold"
//                                     >
//                                         {item.item_name}
//                                     </h3>
//                                     <p
//                                         className="text-sm text-gray-500"
//                                     >
//                                         {item.description}
//                                     </p>
//                                     <p
//                                         className="text-base font-bold mt-2"
//                                     >
//                                         {rupeeSymbol}{item.price}
//                                     </p>
//                                     <div
//                                         className="flex items-center mt-2"
//                                     >
//                                         <button
//                                             className="bg-orange-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
//                                             onClick={() => updateCart(item, 1)}
//                                         >
//                                             Add to Cart
//                                         </button>
//                                         {/* {quantities[item.item_id] && (
//                                             <div
//                                                 className="flex items-center ml-2"
//                                             >
//                                                 <button
//                                                     className="bg-gray-800 text-white p-1 rounded"
//                                                     onClick={() => updateCart(item, quantities[item.item_id] - 1)}
//                                                 >
//                                                     -
//                                                 </button>
//                                                 <span
//                                                     className="mx-2"
//                                                 >
//                                                     {quantities[item.item_id]}
//                                                 </span>
//                                                 <button
//                                                     className="bg-gray-800 text-white p-1 rounded"
//                                                     onClick={() => updateCart(item, quantities[item.item_id] + 1)}
//                                                 >
//                                                     +
//                                                 </button>
//                                             </div>
//                                         )} */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 )}
//             </div>
//             <hr />
//             <hr />
//             <br />
//         </>
//     );
// }

// export default MenuItems;