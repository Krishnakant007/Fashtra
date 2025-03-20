// "use client";

// import { useEffect, useState } from "react";

// const HistoryPage = () => {
//   const [history, setHistory] = useState<any[]>([]);

//   useEffect(() => {
//     const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
//     setHistory(savedHistory);
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Purchase History</h1>
//       {history.length === 0 ? (
//         <p className="text-center text-gray-500">No purchases yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {history.map((order, index) => (
//             <div key={index} className="p-4 border rounded-lg shadow-lg">
//               <img src={order.image} alt={order.name} className="w-full rounded-lg mb-4" />
//               <h2 className="text-lg font-bold">{order.name}</h2>
//               <p className="text-gray-600">₹{order.price}</p>
//               <p className="text-gray-500">Size: {order.sizes.join(", ")}</p>
//               <p className="text-gray-500">Delivery: {order.deliveryTime}</p>
//               <p className="text-gray-400">Payment ID: {order.paymentId}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default HistoryPage;



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Order {
  image: string;
  name: string;
  price: number;
  sizes?: string[];
  deliveryTime: string;
  paymentId: string;
}

interface Order {
  image: string;
  name: string;
  price: number;
  sizes: string[];
  deliveryTime: string;
  paymentId: string;
}

const HistoryPage = () => {
  const [history, setHistory] = useState<Order[]>([]);

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window !== "undefined") {
      const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
      setHistory(savedHistory);
=======
    try {
      const savedHistory = JSON.parse(localStorage.getItem("history") || "[]") as Order[];
      setHistory(savedHistory);
    } catch (error) {
      console.error("Error parsing history data:", error);
>>>>>>> 41022bc (Fixed)
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Purchase History</h1>
      {history.length === 0 ? (
        <p className="text-center text-gray-500">No purchases yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {history.map((order, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-lg">
              <div className="relative w-full h-48">
                <Image 
                  src={order.image} 
                  alt={order.name} 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{order.name}</h2>
              <p className="text-gray-600">₹{order.price}</p>
<<<<<<< HEAD
              <p className="text-gray-500">Size: {order.sizes?.join(", ") || "N/A"}</p>
=======
              <p className="text-gray-500">
                Size: {Array.isArray(order.sizes) ? order.sizes.join(", ") : "N/A"}
              </p>
>>>>>>> 41022bc (Fixed)
              <p className="text-gray-500">Delivery: {order.deliveryTime}</p>
              <p className="text-gray-400">Payment ID: {order.paymentId}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
