const nav = document.querySelector(".navbar-collapse");

document.addEventListener('click', ()=> {
    console.log("hello")
  if (nav.classList.contains('show')) {
    nav.classList.remove('show')
  }
})

