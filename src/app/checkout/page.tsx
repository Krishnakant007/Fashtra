"use client";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const orderData = await fetch("/api/razorpay", { method: "POST" }).then((res) => res.json());

    const options = {
      key: "your_razorpay_key", // Replace with your Razorpay Key
      amount: orderData.amount,
      currency: "INR",
      name: "FashionX",
      description: "Clothing Purchase",
      order_id: orderData.id,
      handler: function (response: any) {
        alert("Payment Successful: " + response.razorpay_payment_id);
      },
      prefill: {
        name: form.name,
        contact: form.phone,
      },
    };

    const razorpay = new (window as any).Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Checkout</h2>
      <input type="text" placeholder="Full Name" className="border p-2 w-full my-2" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="text" placeholder="Address" className="border p-2 w-full my-2" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <input type="text" placeholder="Phone Number" className="border p-2 w-full my-2" onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <button className="bg-black text-white px-4 py-2 mt-2" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
