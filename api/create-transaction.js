import midtransClient from "midtrans-client"
import fs from "fs"

export default async function handler(req,res){

const price = JSON.parse(
fs.readFileSync("./config/price.json")
).price

const snap = new midtransClient.Snap({

isProduction:false,
serverKey:process.env.MIDTRANS_SERVER_KEY

})

const parameter={

transaction_details:{

order_id:"ORDER-"+Date.now(),
gross_amount:price

}

}

const transaction = await snap.createTransaction(parameter)

res.json({token:transaction.token})

}
