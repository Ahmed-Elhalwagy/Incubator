const navIcon = document.querySelector('.nav-icon');
const mobileNav = document.querySelector(".mobile-nav");

navIcon.addEventListener("click",()=>{
mobileNav.classList.toggle('hidden')
})
window.addEventListener('resize', function() {
    if (screen.width >= 900){
        mobileNav.classList.add("hidden")
    }

})

const application = document.querySelector('.application');

application.addEventListener("click",()=>{
    window.location.href = "#"
})