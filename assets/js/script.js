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