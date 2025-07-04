function generateQRCode() {
  const url = document.getElementById('urlInput').value.trim();
  if (url === "") {
    alert("⚠️ Please enter a valid URL!");
    return;
  }

  const qr = new QRious({
    element: document.getElementById('qrCode'),
    value: url,
    size: 250,
    level: 'H'
  });

  // Show share button
  const shareBtn = document.getElementById('shareBtn');
  shareBtn.style.display = "block";
}

function shareQRCode() {
  const url = document.getElementById('urlInput').value.trim();
  if (navigator.share) {
    navigator.share({
      title: 'Check out this QR Code',
      text: `Here’s a QR code for the URL: ${url}`,
      url: url
    })
    .then(() => console.log('Shared successfully!'))
    .catch((error) => console.error('Sharing failed', error));
  } else {
    alert("Sharing is not supported on this browser. Try using mobile or Chrome.");
  }
}


