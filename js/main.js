const mask = document.getElementById("mask");
const main = document.getElementById("mainBox");
const site = document.getElementById("siteUnderConstruction");
const hi = document.getElementById("hi");
const nameTitle = document.getElementById('nameTitle');
const title = document.getElementById('title');



window.addEventListener('scroll', function () {
    let content = document.querySelector('#siteUnderConstruction')
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if(contentPosition < screenPosition){
        content.classList.remove('hidden')
        content.classList.add('visible')

    }else{
        content.classList.remove('visible')
        content.classList.add('hidden')
    }
})

function loadIntro() {
  setTimeout(() => {
    mask.classList.add("hidden");
  }, 1500);
  setTimeout(() => {
    main.classList.remove("hidden");
    main.classList.add("visible");
    
  }, 2000);
  setTimeout(() => {
    hi.classList.remove('hidden');
    hi.classList.add('visible');
  }, 2200);
  setTimeout(() => {
    nameTitle.classList.remove("hidden");
    nameTitle.classList.add("visible");    
  }, 2500);
  setTimeout(() => {
    title.classList.remove("hidden");
    title.classList.add("visible");       
  }, 2800);
}
loadIntro();
