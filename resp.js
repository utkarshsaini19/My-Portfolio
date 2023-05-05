burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.nav-list');
rightNav=document.querySelector('.rightNav');
toggle=document.getElementsByClassName('.toggle');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
    burger.classList.toggle('toggle');
})

const sendemail = async () => {
 console.log("Hello from email");
}