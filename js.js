let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

let a=0;
window.onscroll = ()=>{
  section.forEach(sec=>{
    let top = window.scrollY
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>=offset && top< offset+height){
      navlink.forEach(link=>{
          link.classList.remove('active');
          document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    }
  });
};
section.forEach(sec=>{
  let top = window.scrollY
  console.log("top:",top,"offset:",sec.offsetTop,"  offset hgt",sec.offsetHeight," id:", sec.getAttribute('id'));
});

