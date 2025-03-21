// "use client";

// import React, { useState } from 'react';
// import Script from 'next/script';

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const product = {
//   name: "T-Shirt Half",
//   images: [
//     "/images/tshirt1.png",
//     "/images/tshirt2.png",
//   ],
//   sizes: [
//     { size: "S", price: 399 },
//     { size: "M", price: 499 },
//     { size: "L", price: 599 },
//     { size: "XL", price: 699 },
//   ]
// };

// const ProductPage = () => {
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handlePayment = async () => {
//     setIsProcessing(true);

//     try {
//       const response = await fetch('/api/create-order', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: selectedSize.price })
//       });

//       const data = await response.json();
//       if (!data.orderId) throw new Error("Order ID not received");

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: selectedSize.price * 100,
//         currency: "INR",
//         name: "FashtraWebsitedeveloper",
//         description: `Buy ${product.name} - ${selectedSize.size}`,
//         order_id: data.orderId,
//         handler: (response: any) => {
//           alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
//         },
//         prefill: {
//           name: 'Krishna K',
//           email: 'krishnak887@gmail.com',
//           contact: '9999999991'
//         },
//         theme: { color: '#3399cc' },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//       alert("Payment failed. Try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//       <h1 className="text-2xl font-bold">{product.name}</h1>

//       <div className="flex gap-4 mt-4">
//         {product.images.map((img, index) => (
//           <img key={index} src={img} alt={`Product ${index + 1}`} className="w-40 h-40 rounded shadow" />
//         ))}
//       </div>

//       <div className="mt-4">
//         <label className="block font-semibold mb-2">Select Size:</label>
//         <select
//           className="border p-2 rounded"
//           value={selectedSize.size}
//           onChange={(e) => {
//             const size = product.sizes.find(s => s.size === e.target.value);
//             if (size) setSelectedSize(size);
//           }}
//         >
//           {product.sizes.map((s) => (
//             <option key={s.size} value={s.size}>{s.size} - ₹{s.price}</option>
//           ))}
//         </select>
//       </div>

//       <button
//         onClick={handlePayment}
//         disabled={isProcessing}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
//       >
//         {isProcessing ? "Processing..." : `Buy for ₹${selectedSize.price}`}
//       </button>
//     </div>
//   );
// };

// export default ProductPage;



// "use client";

// import { useParams } from "next/navigation";
// import products from "@/data/products"; // Ensure the correct path
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const product = products.find((item) => item.id === id);

//   if (!product) {
//     return <h1 className="text-center text-red-500 text-2xl">Product Not Found!</h1>;
//   }

//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
        
//         {/* Product Image */}
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={300}
//           height={300}
//           className="my-4 rounded-lg"
//         />

//         {/* Price */}
//         <p className="text-lg font-semibold text-gray-800">Price: ₹{product.price}</p>

//         {/* Sizes */}
//         <div className="mt-4">
//           <h2 className="font-semibold">Select Size:</h2>
//           <div className="flex gap-2 mt-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 className={`px-4 py-2 border ${selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"} rounded`}
//                 onClick={() => setSelectedSize(size)}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Delivery Time */}
//         <p className="mt-4 text-gray-600">Expected Delivery: {product.deliveryTime}</p>

//         {/* Buy Now Button */}
//         <Link href={`/checkout/${product.id}?size=${selectedSize}`}>
//           <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
//             Buy Now
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



// "use client";

// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const product = products.find((p) => p.id === id);

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     address: "",
//   });
//   const [isProcessing, setIsProcessing] = useState(false);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => {
//     setShowForm(true); // Show the form when Buy Now is clicked
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);

//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100, // Use product price dynamically
//         currency: "INR",
//         name: formData.name,
//         description: product.name,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);
//         },
//         prefill: {
//           name: formData.name,
//           email: "test@example.com",
//           contact: formData.mobile,
//         },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full">
//         <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />

//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700">Price: ₹{product.price}</p>
//         <p className="text-gray-500">Sizes: {product.sizes.join(", ")}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing}
//               className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




// "use client";

// import React, { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: product.name,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);

//           // Save history to local storage
//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));

//           router.push("/success"); // Redirect to success page
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//       <div className="p-6 bg-white rounded-lg shadow-md max-w-md w-full">
//         <img src={product.image} alt={product.name} className="w-full rounded-lg mb-4" />
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700">Price: ₹{product.price}</p>
//         <p className="text-gray-500">Sizes: {product.sizes.join(", ")}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {!showForm ? (
//           <button onClick={handleBuyNow} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
//             <input name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
//             <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />

//             <button onClick={handlePayment} disabled={isProcessing} className="w-full px-4 py-2 bg-green-500 text-white rounded">
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



// "use client";

// import React, { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const stockLeft = Math.floor(Math.random() * 20) + 5; // Random stock between 5 and 25

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);

//           // Save history to local storage
//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));

//           router.push("/success"); // Redirect to success page
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//       <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
//         <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg mb-4" />
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {/* Size Selector */}
//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <select
//             value={selectedSize}
//             onChange={(e) => setSelectedSize(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//           >
//             {product.sizes.map((size) => (
//               <option key={size} value={size}>{size}</option>
//             ))}
//           </select>
//         </div>

//         {!showForm ? (
//           <button onClick={handleBuyNow} className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg">
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
//             <input name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
//             <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />

//             <button onClick={handlePayment} disabled={isProcessing} className="w-full px-4 py-2 bg-green-500 text-white rounded-lg">
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



// "use client";

// import React, { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const stockLeft = Math.floor(Math.random() * 20) + 5; // Random stock between 5 and 25

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!selectedSize || !formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);

//           // Save history to local storage
//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));

//           router.push("/success"); // Redirect to success page
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       {/* Left Side: Product Image */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img src={product.image} alt={product.name} className="w-96 h-auto rounded-lg shadow-lg" />
//       </div>

//       {/* Right Side: Product Details */}
//       <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {/* Size Selector */}
//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <div className="flex gap-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             disabled={!selectedSize}
//             className={`mt-4 w-full px-4 py-2 rounded-lg ${
//               selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address}
//               className={`w-full px-4 py-2 rounded-lg ${
//                 isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stockLeft, setStockLeft] = useState<number>(0);

//   useEffect(() => {
//     setStockLeft(Math.floor(Math.random() * 20) + 5); // Generate stock once when page loads
//   }, []);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!selectedSize || !formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);

//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));

//           router.push("/success");
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       {/* Left Side: Product Image */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img src={product.image} alt={product.name} className="w-96 h-auto rounded-lg shadow-lg" />
//       </div>

//       {/* Right Side: Product Details */}
//       <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {/* Size Selector */}
//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <div className="flex gap-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             disabled={!selectedSize}
//             className={`mt-4 w-full px-4 py-2 rounded-lg ${
//               selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address}
//               className={`w-full px-4 py-2 rounded-lg ${
//                 isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stockLeft, setStockLeft] = useState<number>(0);

//   useEffect(() => {
//     if (!stockLeft) setStockLeft(Math.floor(Math.random() * 20) + 5); // ✅ Only sets once
//   }, []);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async () => {
//     if (!selectedSize || !formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: product.price * 100 }), // ✅ Fixed API Call
//       });

//       if (!response.ok) throw new Error("Order creation failed");

//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);

//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));

//           router.push("/success");
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       {/* Left Side: Product Image */}
//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img src={product.image} alt={product.name} className="w-96 h-auto rounded-lg shadow-lg" />
//       </div>

//       {/* Right Side: Product Details */}
//       <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         {/* Size Selector */}
//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <div className="flex gap-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             disabled={!selectedSize}
//             className={`mt-4 w-full px-4 py-2 rounded-lg ${
//               selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address}
//               className={`w-full px-4 py-2 rounded-lg ${
//                 isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stockLeft, setStockLeft] = useState<number>(0);
//   const [mobileError, setMobileError] = useState<string | null>(null);

//   useEffect(() => {
//     setStockLeft(Math.floor(Math.random() * 20) + 5);
//   }, []);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === "mobile") {
//       if (!/^\d{0,10}$/.test(value)) return; // Allow only digits and max 10 characters
//       if (value.length === 10) setMobileError(null);
//       else setMobileError("Please Enter Valid Mobile number .");
//     }
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePayment = async () => {
//     if (!selectedSize || !formData.name || !formData.mobile || !formData.address) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (formData.mobile.length !== 10) {
//       alert("Mobile number must be exactly 10 digits.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);
//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));
//           router.push("/success");
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img src={product.image} alt={product.name} className="w-96 h-auto rounded-lg shadow-lg" />
//       </div>

//       <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <div className="flex gap-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             disabled={!selectedSize}
//             className={`mt-4 w-full px-4 py-2 rounded-lg ${
//               selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               name="name"
//               placeholder="Enter Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//               maxLength={10}
//             />
//             {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}
//             <input
//               name="address"
//               placeholder="Enter Your Full Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address}
//               className={`w-full px-4 py-2 rounded-lg ${
//                 isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





// "use client";

// import React, { useState, useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";
// import products from "@/data/products";
// import Script from "next/script";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const ProductPage = () => {
//   const { id } = useParams();
//   const router = useRouter();
//   const product = products.find((p) => p.id === id);

//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({ name: "", mobile: "", address: "", pincode: "" });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stockLeft, setStockLeft] = useState<number>(0);
//   const [mobileError, setMobileError] = useState<string | null>(null);
//   const [pincodeError, setPincodeError] = useState<string | null>(null);

//   useEffect(() => {
//     setStockLeft(Math.floor(Math.random() * 20) + 5);
//   }, []);

//   if (!product) {
//     return <div className="text-center text-red-500">Product Not Found!</div>;
//   }

//   const handleBuyNow = () => setShowForm(true);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     if (name === "mobile") {
//       if (!/^\d{0,10}$/.test(value)) return;
//       setMobileError(value.length === 10 ? null : "Mobile number must be 10 digits.");
//     }

//     if (name === "pincode") {
//       if (!/^\d{0,6}$/.test(value)) return;
//       setPincodeError(value.length === 6 ? null : "Pincode must be exactly 6 digits.");
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePayment = async () => {
//     if (!selectedSize || !formData.name || !formData.mobile || !formData.address || !formData.pincode) {
//       alert("Please fill all fields.");
//       return;
//     }
//     if (formData.mobile.length !== 10) {
//       alert("Mobile number must be exactly 10 digits.");
//       return;
//     }
//     if (formData.pincode.length !== 6) {
//       alert("Pincode must be exactly 6 digits.");
//       return;
//     }

//     setIsProcessing(true);
//     try {
//       const response = await fetch("/api/create-order", { method: "POST" });
//       const data = await response.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: product.price * 100,
//         currency: "INR",
//         name: formData.name,
//         description: `${product.name} - Size: ${selectedSize}`,
//         order_id: data.orderId,
//         handler: function (response: any) {
//           console.log("Payment successful", response);
//           const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
//           purchaseHistory.push({
//             ...product,
//             size: selectedSize,
//             name: formData.name,
//             mobile: formData.mobile,
//             address: formData.address,
//             pincode: formData.pincode,
//             paymentId: response.razorpay_payment_id,
//           });
//           localStorage.setItem("history", JSON.stringify(purchaseHistory));
//           router.push("/success");
//         },
//         prefill: { name: formData.name, contact: formData.mobile },
//         theme: { color: "#3399cc" },
//       };

//       const rzp1 = new window.Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Payment failed", error);
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />

//       <div className="w-full lg:w-1/2 flex justify-center">
//         <img src={product.image} alt={product.name} className="w-96 h-auto rounded-lg shadow-lg" />
//       </div>

//       <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold">{product.name}</h1>
//         <p className="text-gray-700 text-lg">Price: ₹{product.price}</p>
//         <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
//         <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

//         <div className="mt-4">
//           <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
//           <div className="flex gap-2">
//             {product.sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 className={`px-4 py-2 border rounded-lg ${
//                   selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
//                 }`}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {!showForm ? (
//           <button
//             onClick={handleBuyNow}
//             disabled={!selectedSize}
//             className={`mt-4 w-full px-4 py-2 rounded-lg ${
//               selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Buy Now
//           </button>
//         ) : (
//           <div className="mt-4">
//             <input
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />
//             <input
//               name="mobile"
//               placeholder="Mobile No."
//               value={formData.mobile}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//               maxLength={10}
//             />
//             {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}

//             <input
//               name="address"
//               placeholder="Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//             />

//             <input
//               name="pincode"
//               placeholder="Enter Pincode"
//               value={formData.pincode}
//               onChange={handleChange}
//               className="w-full px-3 py-2 mb-2 border rounded"
//               maxLength={6}
//             />
//             {pincodeError && <p className="text-red-500 text-sm">{pincodeError}</p>}

//             <button
//               onClick={handlePayment}
//               disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address || !formData.pincode}
//               className={`w-full px-4 py-2 rounded-lg ${
//                 isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address || !formData.pincode
//                   ? "bg-gray-300 cursor-not-allowed"
//                   : "bg-green-500 text-white"
//               }`}
//             >
//               {isProcessing ? "Processing..." : "Proceed to Pay"}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;








"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import products from "@/data/products";
import Script from "next/script";


declare global {
  interface Window {
    Razorpay: any;
  }
}

const ProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const product = products.find((p) => p.id === String(id)); // ✅ Convert `id` to string

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", address: "", pincode: "" });
  const [isProcessing, setIsProcessing] = useState(false);
  const [stockLeft, setStockLeft] = useState<number>(0);
  const [mobileError, setMobileError] = useState<string | null>(null);
  const [pincodeError, setPincodeError] = useState<string | null>(null);

  useEffect(() => {
    setStockLeft(Math.floor(Math.random() * 20) + 5);
  }, []);

  if (!product) {
    return <div className="text-center text-red-500">Product Not Found!</div>;
  }

  const handleBuyNow = () => setShowForm(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      if (!/^\d{0,10}$/.test(value)) return;
      setMobileError(value.length === 10 ? null : "Mobile number must be 10 digits.");
    }

    if (name === "pincode") {
      if (!/^\d{0,6}$/.test(value)) return;
      setPincodeError(value.length === 6 ? null : "Pincode must be exactly 6 digits.");
    }

    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async () => {
    if (!selectedSize || !formData.name || !formData.mobile || !formData.address || !formData.pincode) {
      alert("Please fill all fields.");
      return;
    }
    if (formData.mobile.length !== 10) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }
    if (formData.pincode.length !== 6) {
      alert("Pincode must be exactly 6 digits.");
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch("/api/create-order", { method: "POST" });
      const data = await response.json();

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "", 
        amount: Number(product.price) * 100,  // ✅ Ensure price is a valid number
        currency: "INR",
        name: formData.name,
        description: `${product.name} - Size: ${selectedSize}`,
        order_id: data?.orderId || "", // ✅ Avoid undefined error
        handler: function (response: any) {
          console.log("Payment successful", response);
          
          const purchaseHistory = JSON.parse(localStorage.getItem("history") || "[]");
          purchaseHistory.push({
            ...product,
            sizes: [selectedSize], // ✅ Ensure consistency with Order interface
            name: formData.name,
            mobile: formData.mobile,
            address: formData.address,
            pincode: formData.pincode,
            paymentId: response.razorpay_payment_id,
          });
      
          localStorage.setItem("history", JSON.stringify(purchaseHistory));
          router.push("/success");
        },
        prefill: { 
          name: formData.name, 
          contact: formData.mobile 
        },
        theme: { color: "#3399cc" },
      };
      
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center min-h-screen bg-gray-100 p-4">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
       
        />
      </div>

      <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-700 text-lg">  Price: ₹{Number(product.price || 0).toLocaleString("en-IN")}</p>
        <p className="text-red-500 font-semibold">Stock Left: {stockLeft}</p>
        <p className="text-gray-500">Expected Delivery: {product.deliveryTime}</p>

        <div className="mt-4">
          <label className="block text-gray-600 font-semibold mb-1">Select Size:</label>
          <div className="flex gap-2">
            {product.sizes?.length > 0 ? (
              product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedSize === size ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))
            ) : (
              <p className="text-gray-500">No sizes available</p>
            )}
          </div>
        </div>

        {!showForm ? (
          <button
            onClick={handleBuyNow}
            disabled={!selectedSize}
            className={`mt-4 w-full px-4 py-2 rounded-lg ${
              selectedSize ? "bg-blue-500 text-white" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Buy Now
          </button>
        ) : (
          <div className="mt-4">
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
            <input name="mobile" placeholder="Mobile No." value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" maxLength={10} />
            {mobileError && <p className="text-red-500 text-sm">{mobileError}</p>}

            <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" />
            <input name="pincode" placeholder="Enter Pincode" value={formData.pincode} onChange={handleChange} className="w-full px-3 py-2 mb-2 border rounded" maxLength={6} />
            {pincodeError && <p className="text-red-500 text-sm">{pincodeError}</p>}

            <button onClick={handlePayment} disabled={isProcessing || !selectedSize || !formData.name || !formData.mobile || !formData.address || !formData.pincode} className={`w-full px-4 py-2 rounded-lg ${isProcessing ? "bg-gray-300" : "bg-green-500 text-white"}`}>
              {isProcessing ? "Processing..." : "Proceed to Pay"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
