const whereWeAt = document.getElementById("whereWeAt");

whereWeAt.addEventListener('click', ()=> {
    console.log(window.location)
});

const goToGoogle = document.getElementById("goToGoogle");

goToGoogle.addEventListener('click', ()=> {
    window.location.href = "https://google.com"
});

let popup =  null;

const openPopup = document.getElementById("openPopup");

openPopup.addEventListener('click', ()=> {
    popup =  window.open("", "_blank", "width=400, height=400");
});

const fillContentInPopup = document.getElementById("fillContentInPopup");

fillContentInPopup.addEventListener('click', ()=> {
    window.open("https://google.com", "_blank", "width=400, height=400");
});

const replaceUrl = document.getElementById("replaceUrl");

replaceUrl.addEventListener('click', ()=> {
    window.location.href("https://google.com");
});

const assignUrlToPopup = document.getElementById("assignUrlToPopup");

assignUrlToPopup.addEventListener('click', ()=> {
    popup.location.assign("https://google.com");
});

const closePopup = document.getElementById("closePopup");

closePopup.addEventListener('click', ()=> {
    popup.close();
});

document.getElementById("updateYear").innerHTML = new Date().getFullYear();