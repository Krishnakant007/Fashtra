// "use client";

// import { useEffect, useState } from "react";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const Checkout = () => {
//   const [form, setForm] = useState({ name: "", address: "", phone: "" });

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handlePayment = async () => {
// <<<<<<< HEAD
//     try {
//       const orderData = await fetch("/api/create-order", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: 50000 }), // Example: ₹500 (50000 paise)
//       }).then((res) => res.json());

//       if (!orderData.orderId) throw new Error("Order creation failed");

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Use env variable
//         amount: 50000, // Must match the backend amount
//         currency: "INR",
//         name: "FashionX",
//         description: "Clothing Purchase",
//         order_id: orderData.orderId,
//         handler: function (response: { razorpay_payment_id: string }) {
//           alert("Payment Successful: " + response.razorpay_payment_id);
//         },
//         prefill: {
//           name: form.name,
//           contact: form.phone,
//         },
//       };

//       const razorpay = new (window as any).Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Payment failed. Please try again.");
//     }
// =======
//     const orderData = await fetch("/api/create-order", { method: "POST" }).then((res) => res.json());

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // ✅ Use env variable
//       amount: orderData.amount,
//       currency: "INR",
//       name: "FashionX",
//       description: "Clothing Purchase",
//       order_id: orderData.orderId, // ✅ Fix order ID reference
//       handler: (response: { razorpay_payment_id: string }) => {
//         alert("Payment Successful! ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: form.name,
//         contact: form.phone,
//       },
//     };

//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
// >>>>>>> 41022bc (Fixed)
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl font-bold">Checkout</h2>
//       <input
//         type="text"
//         placeholder="Full Name"
//         className="border p-2 w-full my-2"
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Address"
//         className="border p-2 w-full my-2"
//         onChange={(e) => setForm({ ...form, address: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Phone Number"
//         className="border p-2 w-full my-2"
//         onChange={(e) => setForm({ ...form, phone: e.target.value })}
//       />
//       <button className="bg-black text-white px-4 py-2 mt-2" onClick={handlePayment}>
//         Pay Now
//       </button>
//     </div>
//   );
// };

// export default Checkout;



"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    try {
      const orderData = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 50000 }), // ₹500 (50000 paise)
      }).then((res) => res.json());

      if (!orderData.orderId) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Use env variable
        amount: 50000, // Ensure this matches the backend amount
        currency: "INR",
        name: "FashionX",
        description: "Clothing Purchase",
        order_id: orderData.orderId, // Fix reference
        handler: function (response: { razorpay_payment_id: string }) {
          alert("Payment Successful: " + response.razorpay_payment_id);
        },
        prefill: {
          name: form.name,
          contact: form.phone,
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Checkout</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 w-full my-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        className="border p-2 w-full my-2"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="border p-2 w-full my-2"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <button className="bg-black text-white px-4 py-2 mt-2" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;

