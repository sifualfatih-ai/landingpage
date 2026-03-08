let priceData = null;

fetch("config.json")
  .then(res => res.json())
  .then(data => {
    priceData = data;
    document.getElementById("priceText").innerText =
      "Harga Ebook: Rp " + data.price;
  });

document.getElementById("downloadBtn").onclick = () => {
  document.getElementById("paymentModal").style.display = "block";
};

document.getElementById("payBtn").onclick = async () => {

  const res = await fetch("/api/create-transaction", {
    method: "POST"
  });

  const data = await res.json();

  snap.pay(data.token, {
    onSuccess: function(result){
      alert("Pembayaran sukses");
      window.location.href = "download.html";
    },
    onPending: function(result){
      alert("Menunggu pembayaran");
    },
    onError: function(result){
      alert("Pembayaran gagal");
    }
  });

};
