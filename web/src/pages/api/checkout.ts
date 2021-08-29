import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
    const { priceId } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        success_url: "https://caseshortcut.com/thank-you?{CHECKOUT_SESSION_ID}",
        cancel_url: "https://caseshortcut.com/",
      });

      res.send({
        sessionId: session.id,
      });
    } catch (e) {
      console.log("error", e.message);
      res.status(400);
      return res.send({
        error: {
          message: e.message,
        },
      });
    }
  } else {
    res.status(404);
  }
}
