let productPrice = 0

async function loadPrice(){

const res = await fetch("/config/price.json")
const data = await res.json()

productPrice = data.price

document.getElementById("priceText").innerText =
"Rp "+productPrice.toLocaleString("id-ID")

}

loadPrice()

document.querySelectorAll(".buyButton").forEach(btn=>{

btn.onclick=()=>{

document.getElementById("paymentModal").style.display="block"

}

})


function closeModal(){

document.getElementById("paymentModal").style.display="none"

}


document.getElementById("payBtn").onclick=async()=>{

const res = await fetch("/api/create-transaction",{method:"POST"})

const data = await res.json()

snap.pay(data.token,{

onSuccess:function(result){

window.location="/api/generate-download?order="+result.order_id

},

onPending:function(){

alert("Menunggu pembayaran")

},

onError:function(){

alert("Pembayaran gagal")

}

})

}
