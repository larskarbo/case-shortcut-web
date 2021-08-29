import { NextApiRequest, NextApiResponse } from "next";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
var md = require("markdown-it")();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  //todo fix det her


  // let eventType;
  // // Check if webhook signing is configured.
  // const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // if (webhookSecret) {
  //   // Retrieve the event by verifying the signature using the raw body and secret.
  //   let event;
  //   let signature = req.headers["stripe-signature"];
  //   console.log("signature: ", signature);

  //   try {
  //     event = stripe.webhooks.constructEvent(req.rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
  //   } catch (err) {
  //     console.log("Error verifying stripe webhook: ", err);
  //     res.status(400);
  //     res.send({
  //       error: {
  //         message: "Error verifying stripe webhook",
  //       },
  //     });
  //     return;
  //   }
  //   // Extract the object from the event.
  //   data = event.data;
  //   eventType = event.type;
  // } else {
  //   res.status(400);
  //   res.send({
  //     error: {
  //       message: "No webhook secret",
  //     },
  //   });
  //   return;
  // }

  // switch (eventType) {
  //   case "checkout.session.completed":
  //     try {
  //       const email = data.object.customer_details.email;
  //       const link = `https://caseshortcut.com/Case_Shortcut.dmg?token=130593482432`;
  //       const markdown = `
  //       Thanks for buying Case Shortcut!

  //       You can download the app at: 

  //       Let me know if you have any problems!

  //       Feel free to reply to this mail.

  //       Best,

  //       Lars Karbo
  //       `;

  //       const emailContent = md.render(markdown).replaceAll("LINK", link);
  //       await sendEmail(email, "Case Shortcut download link", emailContent);
  //     } catch (e) {
  //       console.log("error", e);
  //       res.status(500);
  //       res.send({
  //         error: {
  //           message: "Error sending email: " + e.message,
  //         },
  //       });
  //       return;
  //     }

  //     // Payment is successful and the subscription is created.
  //     // You should provision the subscription.
  //     break;
  //   // case "invoice.paid":
  //   //   // Continue to provision the subscription as payments continue to be made.
  //   //   // Store the status in your database and check when a user accesses your service.
  //   //   // This approach helps you avoid hitting rate limits.
  //   //   break;
  //   // case "invoice.payment_failed":
  //   //   // The payment failed or the customer does not have a valid payment method.
  //   //   // The subscription becomes past_due. Notify your customer and send them to the
  //   //   // customer portal to update their payment information.
  //   //   break;
  //   default:
  //     console.log("Unhandled event type", eventType);
  //     // Unhandled event type
  //     res.status(400);
  //     res.send({
  //       error: {
  //         message: "Unhandled event type",
  //       },
  //     });
  //     return;
  // }

  // res.send({
  //   success: true,
  // });
}
