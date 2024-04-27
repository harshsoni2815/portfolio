let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');


window.onscroll = ()=>{
  section.forEach(sec=>{
    console.log(window.scrollY);
  })
};