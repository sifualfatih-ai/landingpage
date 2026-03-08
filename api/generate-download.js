import crypto from "crypto"

export default async function handler(req,res){

const order = req.query.order

const token = crypto.randomBytes(20).toString("hex")

const link = `https://domainanda.com/download/ebook.pdf?token=${token}`

res.redirect(link)

}
