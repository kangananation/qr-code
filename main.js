/* java script */

  <script crossorigin="anonymous" integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==" referrerpolicy="no-referrer" src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>


<script>
  
  let message =
  "Write something in the text field and click on Generate QR Code button.";
const QRCodeImage = document.querySelector(".qrcode");
const QRCodeMessage = document.querySelector(".qrcode-message");
const generateBtn = document.querySelector(".generate-btn");

let qrcode = new QRCode(QRCodeImage, {
  text: message,
  width: 300,
  height: 300,
  colorDark: "#001219",
  colorLight: "#ffffff",
});

const generateQRCode = (message) => {
  qrcode.clear();
  qrcode.makeCode(message);
};

generateBtn.addEventListener("click", () => {
  message = QRCodeMessage.value;
  generateQRCode(message);
});
  
  
  
</script>


