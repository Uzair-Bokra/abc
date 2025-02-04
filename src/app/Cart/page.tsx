'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from '@/components/ui/input';
import MainBreadcum from '@/components/Breadcum/MainBreadcum';
import Link from 'next/link';

interface CartItem {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number; // Defaults to 1, but always required here for calculations
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [couponCode, setCouponCode] = useState<string>('');
    const [discount, setDiscount] = useState<number>(0);

    useEffect(() => {
        try {
            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
            const normalizedCart = storedCart.map(item => ({
                ...item,
                quantity: item.quantity || 1,
            }));
            setCartItems(normalizedCart);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
        }
    }, []);

    const updateLocalStorage = (updatedCart: CartItem[]) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleQuantityChange = (index: number, quantity: number) => {
        const updatedItems = cartItems.map((item, i) =>
            i === index ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
        window.location.reload();
    };

    const calculateSubtotal = (price: number, quantity: number) => {
        return (price * Math.max(1, quantity)).toFixed(2);
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + parseFloat(calculateSubtotal(item.price, item.quantity)), 0);

    const applyCoupon = () => {
        if (couponCode.toLowerCase() === 'uzair') {
            setDiscount(0.1);
        } else {
            setDiscount(0);
        }
    };

    const discountedTotal = calculateTotal() * (1 - discount);

    return (
        <div>
            <MainBreadcum name="Shopping Cart" pageName="Shopping Cart" />
            <div className="w-[80%] m-auto max-lg:w-[95%]">
                {cartItems.length > 0 ? (
                    <>
                        <Table className="mt-20 mb-10 max-sm:text-xs">
                            <TableHeader className="h-[72px] rounded-sm box_shadow">
                                <TableRow className="border-none outline-none">
                                    <TableHead className="pl-4">Product</TableHead>
                                    <TableHead className="pl-4">Price</TableHead>
                                    <TableHead className="pl-4">Quantity</TableHead>
                                    <TableHead className="pl-4">Subtotal</TableHead>
                                    <TableHead className="pl-4">Remove</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cartItems.map((item, index) => (
                                    <TableRow key={item.id} className="h-[72px] rounded-sm box_shadow font-medium">
                                        <TableCell className="pl-4 max-sm:pl-0">
                                            <div className="flex items-center">
                                                <Image src={item.imageUrl} alt={item.name} width={40} height={40} />
                                                <h2 className="pl-4 max-sm:pl-1 max-sm:pr-2">{item.name}</h2>
                                            </div>
                                        </TableCell>
                                        <TableCell className="pl-4">${item.price.toFixed(2)}</TableCell>
                                        <TableCell className="pl-4">
                                            <Input
                                                className="text-black-500 w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs"
                                                value={item.quantity || 1}
                                                type="number"
                                                min={1}
                                                onChange={(e) =>
                                                    handleQuantityChange(index, parseInt(e.target.value, 10) || 1)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="pl-4">
                                            ${calculateSubtotal(item.price, item.quantity)}
                                        </TableCell>
                                        <TableCell className="pl-4">
                                            <button className="text-red-500 hover:underline" onClick={() => handleRemoveItem(index)}>
                                                X
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <div className="p-6 rounded-lg py-20">
                            <div className="grid grid-cols-2 gap-10 max-md:grid-cols-1">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Coupon Code (uzair) to get 10% discount</h3>
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={couponCode}
                                            onChange={(e) => setCouponCode(e.target.value)}
                                            placeholder="Enter code"
                                            className="flex-1 p-2 border border-gray-300 rounded"
                                        />
                                        <button onClick={applyCoupon} className="px-4 py-2 bg-[rgb(255,159,13)] text-white rounded">
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
                                    <div className="p-4 rounded-md space-y-2 border border-gray-300">
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Subtotal</span>
                                            <span>${discountedTotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Shipping Charge</span>
                                            <span>$5.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Discount (If you applied couponCode uzair)</span>
                                            <span>10%</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-semibold">
                                            <span>Total Amount</span>
                                            <span>${(discountedTotal + 5).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 px-4 py-2 bg-[rgb(255,159,13)] text-white rounded hover:[rgb(255,159,13)]">
                                        <Link href="/Checkout">Proceed to Checkout</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="mt-20 text-center">
                        <h2 className="text-xl font-semibold">Your cart is empty!</h2>
                        <Link href="/Shop" className="text-orange-500 hover:underline">Continue Shopping</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;














// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";
// import { Input } from '@/components/ui/input';
// import MainBreadcum from '@/components/Breadcum/MainBreadcum';
// import Link from 'next/link';

// interface CartItem {
//     id: number;
//     name: string;
//     price: number;
//     imageUrl: string;
//     quantity: number; // Defaults to 1, but always required here for calculations
// }

// const Cart: React.FC = () => {
//     const [cartItems, setCartItems] = useState<CartItem[]>([]);
//     const [couponCode, setCouponCode] = useState<string>('');
//     const [discount, setDiscount] = useState<number>(0);

//     useEffect(() => {
//         try {
//             const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
//             const normalizedCart = storedCart.map(item => ({
//                 ...item,
//                 quantity: item.quantity || 1,
//             }));
//             setCartItems(normalizedCart);
//         } catch (error) {
//             console.error('Error parsing localStorage data:', error);
//         }
//     }, []);

//     const updateLocalStorage = (updatedCart: CartItem[]) => {
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const handleQuantityChange = (index: number, quantity: number) => {
//         const updatedItems = cartItems.map((item, i) =>
//             i === index ? { ...item, quantity: Math.max(1, quantity) } : item
//         );
//         setCartItems(updatedItems);
//         updateLocalStorage(updatedItems);
//     };

//     const handleRemoveItem = (index: number) => {
//         const updatedItems = cartItems.filter((_, i) => i !== index);
//         setCartItems(updatedItems);
//         updateLocalStorage(updatedItems);
//         window.location.reload();
//     };

//     const calculateSubtotal = (price: number, quantity: number) => {
//         return (price * Math.max(1, quantity)).toFixed(2);
//     };

//     const calculateTotal = () =>
//         cartItems.reduce((total, item) => total + parseFloat(calculateSubtotal(item.price, item.quantity)), 0);

//     const applyCoupon = () => {
//         if (couponCode.toLowerCase() === 'uzair') {
//             setDiscount(0.1);
//         } else {
//             setDiscount(0);
//         }
//     };

//     const discountedTotal = calculateTotal() * (1 - discount);

//     return (
//         <div>
//             <MainBreadcum name="Shopping Cart" pageName="Shopping Cart" />
//             <div className="w-[80%] m-auto max-lg:w-[95%]">
//                 {cartItems.length > 0 ? (
//                     <>
//                         <Table className="mt-20 mb-10 max-sm:text-xs">
//                             <TableHeader className="h-[72px] rounded-sm box_shadow">
//                                 <TableRow className="border-none outline-none">
//                                     <TableHead className="pl-4">Product</TableHead>
//                                     <TableHead className="pl-4">Price</TableHead>
//                                     <TableHead className="pl-4">Quantity</TableHead>
//                                     <TableHead className="pl-4">Subtotal</TableHead>
//                                     <TableHead className="pl-4">Remove</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {cartItems.map((item, index) => (
//                                     <TableRow key={item.id} className="h-[72px] rounded-sm box_shadow font-medium">
//                                         <TableCell className="pl-4 max-sm:pl-0">
//                                             <div className="flex items-center">
//                                                 <Image src={item.imageUrl} alt={item.name} width={40} height={40} />
//                                                 <h2 className="pl-4 max-sm:pl-1 max-sm:pr-2">{item.name}</h2>
//                                             </div>
//                                         </TableCell>
//                                         <TableCell className="pl-4">${item.price.toFixed(2)}</TableCell>
//                                         <TableCell className="pl-4 flex items-center space-x-2">
//                                             <button className="px-2 py-1 bg-gray-300 rounded" onClick={() => handleQuantityChange(index, item.quantity - 1)}>-</button>
//                                             <Input
//                                                 className="text-black-500 w-[74px] h-[44px] max-sm:w-[40px] max-sm:h-[30px] max-sm:text-xs text-center"
//                                                 value={item.quantity || 1}
//                                                 type="number"
//                                                 min={1}
//                                                 onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10) || 1)}
//                                             />
//                                             <button className="px-2 py-1 bg-gray-300 rounded" onClick={() => handleQuantityChange(index, item.quantity + 1)}>+</button>
//                                         </TableCell>
//                                         <TableCell className="pl-4">
//                                             ${calculateSubtotal(item.price, item.quantity)}
//                                         </TableCell>
//                                         <TableCell className="pl-4">
//                                             <button className="text-red-500 hover:underline" onClick={() => handleRemoveItem(index)}>
//                                                 X
//                                             </button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </>
//                 ) : (
//                     <div className="mt-20 text-center">
//                         <h2 className="text-xl font-semibold">Your cart is empty!</h2>
//                         <Link href="/" className="text-orange-500 hover:underline">Continue Shopping</Link>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Cart;
