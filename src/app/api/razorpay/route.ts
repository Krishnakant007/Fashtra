import { NextResponse } from "next/server";

export async function POST() {
  const order = {
    id: "order_" + Math.random().toString(36).substr(2, 9),
    amount: 49900, // ₹499 in paisa
  };

  return NextResponse.json(order);
}
