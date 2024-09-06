// // controllers/paymentController.js
// import stripe from 'stripe';
// // ('your_stripe_secret_key');

// export const createPaymentIntent = async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: 'usd',
//     });
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
