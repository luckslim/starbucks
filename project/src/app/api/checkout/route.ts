import { stripe } from "@/app/lib/stripe";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/sucesso`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: "subscription",
    line_items: [
      {
        price: "price_1RBhO0QEoaQM13LuGnxQEn08",
        quantity: 1,
      },
    ],
  });

  return NextResponse.json({ checkoutUrl: checkoutSession.url });
}
