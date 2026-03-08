import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_KEY)

export default async function handler(req,res){

await resend.emails.send({

from:"ebook@domain.com",

to:req.body.email,

subject:"Download Ebook Anda",

html:`Link download: ${req.body.link}`

})

}
