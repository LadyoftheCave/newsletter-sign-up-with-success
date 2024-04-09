const button = document.querySelector('button');
const input = document.querySelector('#email');
const headerImage = document.querySelector('#header_image_mobile');
const headerImagePc = document.querySelector('#header_image_desktop');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const form = document.querySelector('form');
const checkBig = document.createElement('img');
const textContainer = document.querySelector('.text_container');
const ul = document.querySelector('ul')
const p = document.querySelector('p');
const article = document.querySelector('article');
const message = document.createElement('h2');
const emailDiv = document.querySelector('.email_div');


checkBig.src = "assets/images/icon-list.svg";
let inputValue = input.value;

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

input.addEventListener('input', function() {
    let inputValue = input.value;
    if (validateEmail(inputValue)) {
        message.innerText = "Valid email";
        message.style.color = "green";
        input.style.backgroundColor = "";
        input.style.border = "";
    } else {
        emailDiv.appendChild(message);
        message.innerText = "Valid email required";
        message.style.color = "red";
        input.style.backgroundColor = "#ffe8e6";
        input.style.border = "1px solid red";
    }
});



function adjustContainerSize(){
    const screenWidth = window.innerWidth;
    console.log(window.innerWidth);
    
    if (screenWidth < 500) {

    form.addEventListener('submit', (e) => {

        e.preventDefault();
        p.style.marginBlockEnd = "12rem";
        checkBig.style.marginBlockStart = "7rem";
        message.innerText = "";
        stylesElements();
    
        button.addEventListener('click', (e) => {
            location.reload(true);
        })
    
        console.log("clicked");
        
    })
    } else {

form.addEventListener('submit', (e) => {

    e.preventDefault();

    stylesElements();
    message.innerText = "";
    headerImagePc.style.display ="none";
    article.style.inlineSize = "35rem"
    p.style.marginBlockEnd = "3rem";

    button.addEventListener('click', (e) => {
        location.reload(true);
    })

    console.log("clicked");
    
})

    }
    }
    
    adjustContainerSize();
    window.addEventListener('resize', adjustContainerSize);


function stylesElements() {
    headerImage.style.display = "none";
    h1.innerText = "Thanks for Subscribing!"
    checkBig.style.inlineSize = "4rem";
    checkBig.style.marginBlockEnd = "1rem";
    textContainer.prepend(checkBig);
    ul.style.display= "none"
    input.style.display = "none"
    h2.style.display = "none"
    p.innerHTML = `A confirmation email has been sent to <strong>${inputValue}</strong>. Please open it and click the button inside to confirm your subscription`;
    button.innerText = "Dismiss Message";


}
