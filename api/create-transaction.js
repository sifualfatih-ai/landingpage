import midtransClient from "midtrans-client";

export default async function handler(req, res) {

  const snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY
  });

  const parameter = {
    transaction_details: {
      order_id: "order-" + Date.now(),
      gross_amount: 49000
    }
  };

  const transaction = await snap.createTransaction(parameter);

  res.status(200).json({
    token: transaction.token
  });

}
