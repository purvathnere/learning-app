 // Get all details elements
 const detailsElements = document.querySelectorAll('details');

 // Add click event listeners to each details element
 detailsElements.forEach((detailsElement) => {
     detailsElement.addEventListener('click', () => {
         // Close all details elements except the one that was clicked
         detailsElements.forEach((element) => {
             if (element !== detailsElement) {
                 element.removeAttribute('open');
             }
         });
     });
 });

//  login/logout
 let log=localStorage.getItem("status");
 if(log=="login"){

 }else{
     window.location.href = 'login.html';
 }
// logout
 const logout=()=>{
     localStorage.setItem("status","logout");
     localStorage.setItem("user-name","")
     window.location.href = 'login.html';
 }
//  show userName
 let user_name=localStorage.getItem("user-name")
 document.getElementById("userName").innerText = user_name;

 

 // Show or hide the "Go to Top" button based on scroll position
window.addEventListener("scroll", function() {
    var scrollToTopBtn = document.getElementById("goToTopBtn");
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});
 // Scroll to the top when the button is clicked
document.getElementById("goToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});


// clock
function updateTime() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const m= hours>12 ? "PM": "AM";
    const f = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedHours = f < 10 ? `0${f}` : f;

    const clock = document.getElementById("samay");
    clock.textContent = `${formattedHours}  ${formattedMinutes} ${formattedSeconds}  ${m}`;    

}

setInterval(updateTime, 1000);

// loader
setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
  }, 1000);


//   
const flipboxElements = document.querySelectorAll('.stu-ser');

        flipboxElements.forEach((element) => {
            element.addEventListener('mouseenter', () => {
                element.querySelector('.flip').style.transform = 'rotateY(180deg)';
            });

            element.addEventListener('mouseleave', () => {
                element.querySelector('.flip').style.transform = 'rotateY(0deg)';
            });
        });