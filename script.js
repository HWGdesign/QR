let qrDiv = document.getElementById('qr-div');
let qrImg = document.getElementById('qr-image');
let qrText = document.getElementById('qr-text');

function GenerateQrCode() 
{
     if(qrText.value.length > 0) {
          qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
          qrDiv.classList.add('show-img');
     }
     else{
               qrText.classList.add('error');
               setTimeout(()=>
               {
                    qrText.classList.remove('error');
               },1000)    
          }
}