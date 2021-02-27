
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (req, res) => {
  const { priceId } = req.body;
  const { user } = req.clientContext;

  // See https://stripe.com/docs/api/checkout/sessions/create
  // for additional parameters to pass.
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
      // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
      // the actual Session ID is returned in the query parameter when your customer
      // is redirected to the success page.
      success_url: 'https://caseshortcut.com/thank-you',
      cancel_url: 'https://caseshortcut.com/',
    });

    res.send({
      sessionId: session.id,
    });
  } catch (e) {
    console.log("error", e.message)
    res.status(400);
    return res.send({
      error: {
        message: e.message,
      }
    });
  }
}
