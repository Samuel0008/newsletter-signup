let winWidth = window.innerWidth;
const img = document.querySelector('.myImg');
const imgDiv = document.querySelector('.image');
const firstSpan = document.querySelector('.first-span');
const secondSpan = document.querySelector('.second-span');
const thirdSpan = document.querySelector('.third-span');
const initialText = document.querySelector('.ini');
if(winWidth >= 576) {
    img.setAttribute('src', './assets/images/illustration-sign-up-desktop.svg');
} 
const frstHeading = document.querySelector('.frstHeading');
const para = document.querySelector('.para');
const remove = document.querySelector('.remove');
const mainCon = document.querySelector('.main-container');
const cont = document.querySelector('.cont');
const myInput = document.querySelector('.myInput');
const invalidMsg = document.querySelector('.invalidMsg');
const subBtn = document.querySelector('#subBtn');
const emailValue = myInput.value;
function isEmailValid() {
    const regex = new RegExp('^.+@.+\..+$');
    let userEmail = myInput.value;
    const isEmailValid = regex.test(userEmail);
    return isEmailValid;
}


function subscribe() {
    const isValid = isEmailValid();
    if (isValid) {
        img.setAttribute('src', './assets/images/icon-success.svg');
        img.setAttribute('width', '50px');
        img.setAttribute('height', '50px');
        imgDiv.setAttribute('style', "margin-top: 100px");
        subBtn.setAttribute('style', "margin-top: 200px");
        frstHeading.textContent = 'Thanks for subscribing!';
        let userEmail2 = myInput.value;
        firstSpan.textContent = 'A confirmation email has been sent to';
        secondSpan.textContent = userEmail2;
        thirdSpan.textContent = '. Please open it and click the button inside to confirm your subscription.';
        subBtn.textContent = 'Dismiss message';
        remove.textContent = '';
        initialText.textContent = '';
        
        if(winWidth >= 576) {
            imgDiv.setAttribute('style', "margin-top: 50px; margin-bottom:0px;");
            cont.setAttribute('style', "width: 400px;  margin-top: 20px; ");   
            subBtn.setAttribute('style', "margin-top: 50px; margin-bottom: 50px;");
            mainCon.setAttribute('style', "flex-direction: column; margin-left: 2%; width: 500px; ");   
    }
    } else {
        myInput.setAttribute('style', "color: hsl(4, 100%, 67%); border-color: hsl(4, 100%, 67%); background-color: hsl(4, 100%, 92%);");
        invalidMsg.textContent = 'Valid email required';
        invalidMsg.setAttribute('style', 'color: hsl(4, 100%, 67%);');
        let userEmail1 = myInput.value;
        console.log(userEmail1);
    }
     
}