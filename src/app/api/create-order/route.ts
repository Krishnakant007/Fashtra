// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID!,
//     key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(request: NextRequest) {
//     try {
//         const amount = 100 * 100; // Ensure this matches the frontend amount
//         const order = await razorpay.orders.create({
//             amount,
//             currency: "INR",
//             receipt: `receipt_${Date.now()}`,
//         });

//         return NextResponse.json({ orderId: order.id }, { status: 200 });

//     } catch (error: any) {
//         console.error('Error creating order:', error);
//         return NextResponse.json(
//             { error: error.message || 'Error creating order' },
//             { status: 500 }
//         );
//     }
// }


import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { amount }: { amount: number } = await request.json();
    if (!amount) throw new Error("Amount not provided");

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay expects amount in paise (100 paise = 1 INR)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Error creating order" },
      { status: 500 }
    );
  }
}
