let qrDiv = document.getElementById('qr-div');
let qrImg = document.getElementById('qr-image');
let qrText = document.getElementById('qr-text');
let qrError = document.getElementById('qr-error');

function GenerateQrCode() 
{
     if(qrText.value.length > 0) {
          qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
          qrDiv.classList.add('show-img');
     }
     else{
          let html = document.getElementsByName('Error')[0].placeholder='You forgot something...😉👉 (URL or Text)';
     }
     
}