// // import ProductCard from "@/components/ProductCard";

// // export default function Home() {
// //   return (
// //     <div>
// //       <h1 className="text-4xl font-bold">Welcome to FashionX</h1>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
// //         <ProductCard name="T-Shirt" price="499" image="/images/tshirt.jpg" />
// //         <ProductCard name="Hoodie" price="999" image="/images/hoodie.jpg" />
// //       </div>
// //     </div>
// //   );
// // }



// // import ProductCard from "@/components/ProductCard";

// // export default function Home() {
// //   return (
// //     <div>
// //       <h1 className="text-4xl font-bold">Welcome to FashionX</h1>
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
// //         <ProductCard id="tshirt" name="T-Shirt" price="499" image="/images/tshirt.jpg" />
// //         <ProductCard id="hoodie" name="Hoodie" price="999" image="/images/hoodie.jpg" />
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import React, { useState } from 'react';
// import Script from 'next/script';

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const PaymentPage = () => {
//   const AMOUNT = 100; // Amount in INR
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handlePayment = async () => {
//     setIsProcessing(true);

//     try {
//       // Step 1: Create Order in Backend
//       const response = await fetch('/api/create-order', { method: "POST" });
//       const data = await response.json();

//       if (!data.orderId) {
//         throw new Error("Order ID not received from backend");
//       }

//       // Step 2: Initialize Razorpay Payment
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Ensure this is set
//         amount: AMOUNT * 100, // Convert INR to paisa
//         currency: "INR",
//         name: "FashtraWebsitedeveloper",
//         description: 'Test transaction',
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);
//           alert("Payment Successful! Transaction ID: " + response.razorpay_payment_id);
//         },
//         prefill: {
//           name: 'Krishna K',
//           email: 'krishnak887@gmail.com',
//           contact: '9999999991'
//         },
//         theme: {
//           color: '#3399cc',
//         },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//       alert("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//       <div className='p-6 bg-white rounded-lg shadow-md'>
//         <h1 className='text-2xl font-bold mb-4'>Payment Page</h1>
//         <p className='mb-4'>Amount to pay: {AMOUNT} INR</p>

//         <button
//           onClick={handlePayment}
//           disabled={isProcessing}
//           className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
//         >
//           {isProcessing ? "Processing..." : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;



// "use client";

// import Link from "next/link";
// import products from "./data/products"; // Import product list

// const HomePage = () => {
//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Our Products</h1>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="border rounded-lg p-4 shadow-lg">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-40 object-cover mb-4"
//             />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-700">Starting from ₹{product.price}</p>
//             <Link
//               href={`/product/${product.id}`}
//               className="block mt-3 bg-blue-500 text-white py-2 text-center rounded-lg"
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import products from "@/data/products";

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//             <Image 
//               src={product.image} 
//               alt={product.name} 
//               width={250} 
//               height={250} 
//               className="rounded-lg"
//             />
//             <h2 className="text-xl font-bold mt-2">{product.name}</h2>
//             <p className="text-gray-600">₹{product.price}</p>
//             <Link href={`/product/${product.id}`}>
//               <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 View Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



// import Link from "next/link";
// import products from "@/data/products";

// const HomePage = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div key={product.id} className="p-4 border rounded-lg shadow-lg">
//             <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
//             <h2 className="text-lg font-bold">{product.name}</h2>
//             <p className="text-gray-600">₹{product.price}</p>
//             <div className="flex gap-2 mt-3">
//               <Link
//                 href={`/product/${product.id}`}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 View Details
//               </Link>
//               <Link
//                 href={`/product/${product.id}`}
//                 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//               >
//                 Buy Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import products from "@/data/products";

// const HomePage = () => {
//   const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

//   const addToCart = (id: number) => {
//     setCart((prev) => {
//       const exists = prev.find((item) => item.id === id);
//       if (exists) {
//         return prev.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prev, { id, quantity: 1 }];
//     });
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold">My Shop</h1>
//         <div className="relative">
//           <span className="text-2xl">🛒</span>
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {cart.reduce((sum, item) => sum + item.quantity, 0)}
//             </span>
//           )}
//         </div>
//       </header>

//       {/* Product Listing */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-700">Price: ₹{product.price}</p>
//             <div className="mt-3 flex justify-between">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={() => addToCart(product.id)}
//               >
//                 Add to Cart
//               </button>
//               <Link href={`/product/${product.id}`} className="text-blue-600">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import products from "@/data/products";

// const HomePage = () => {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold">My Shop</h1>
//         <Link href="/cart" className="relative">
//           <span className="text-2xl">🛒</span>
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </header>

//       {/* Product Listing */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-700">Price: ₹{product.price}</p>
//             <div className="mt-3">
//               <Link
//                 href={`/product/${product.id}`}
//                 className="block bg-green-500 text-white text-center px-4 py-2 rounded"
//               >
//                 Buy Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// "use client";

// import React from "react";
// import Link from "next/link";
// import products from "@/data/products";

// const HomePage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h1 className="text-xl font-bold">My Shop</h1>
//       </header>

//       {/* Categories Section (Without Icons) */}
//       <div className="flex justify-center gap-6 mt-4">
//         <Link href="/category/male" className="text-gray-700 font-semibold">Boys</Link>
//         <Link href="/category/female" className="text-gray-700 font-semibold">Girls</Link>
//         <Link href="/category/kids" className="text-gray-700 font-semibold">Kids</Link>
//       </div>

//       {/* Product Listing */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-64 object-cover rounded"
//             />
//             <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//             <p className="text-gray-700">Price: ₹{product.price}</p>
//             <div className="mt-3">
//               <Link
//                 href={`/product/${product.id}`}
//                 className="block bg-green-500 text-white text-center px-4 py-2 rounded"
//               >
//                 Buy Now
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



"use client";

import React from "react";
import Link from "next/link";

import products from "@/data/products";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Shop</h1>
      </header>

      {/* Categories Section */}
      <div className="flex justify-center gap-6 mt-4">
        <Link href="/category/male" className="text-gray-700 font-semibold">Boys</Link>
        <Link href="/category/female" className="text-gray-700 font-semibold">Girls</Link>
        <Link href="/category/kids" className="text-gray-700 font-semibold">Kids</Link>
      </div>

      {/* Product Listing */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
            src={product.image}
              alt={product.name}
              width='300'
              height='300'
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <div className="mt-3">
              <Link
                href={`/product/${product.id}`}
                className="block bg-green-500 text-white text-center px-4 py-2 rounded"
              >
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
