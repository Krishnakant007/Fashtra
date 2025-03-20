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


<<<<<<< HEAD
=======

// import { NextRequest, NextResponse } from "next/server";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID!,
//   key_secret: process.env.RAZORPAY_KEY_SECRET!,
// });

// export async function POST(request: NextRequest) {
//   try {
//     const { amount } = await request.json();
//     if (!amount) throw new Error("Amount not provided");

//     const order = await razorpay.orders.create({
//       amount: amount * 1,
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//     });

//     return NextResponse.json({ orderId: order.id }, { status: 200 });
//   } catch (error: any) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { error: error.message || "Error creating order" },
//       { status: 500 }
//     );
//   }
// }


>>>>>>> 41022bc (Fixed)
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
<<<<<<< HEAD
      amount: amount * 100, // Razorpay expects amount in paise (100 paise = 1 INR)
=======
      amount,
>>>>>>> 41022bc (Fixed)
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    return NextResponse.json({ orderId: order.id }, { status: 200 });
<<<<<<< HEAD
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Error creating order" },
      { status: 500 }
    );
=======
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error creating order:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
>>>>>>> 41022bc (Fixed)
  }
}
