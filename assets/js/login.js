const sign_btn=document.querySelector('.toggle-btn');
const container= document.querySelector('.container');
const signin=document.querySelector('.signin-signup');
const signup=document.querySelector('.signup-signin');

let btn="SIGN UP"
sign_btn.addEventListener('click', ()=>{
    container.classList.toggle('cont2');
    if(btn=="SIGN UP"){
        sign_btn.innerText="SIGN IN";
        btn="SIGN IN";
    }else{
        sign_btn.innerText="SIGN UP";
        btn="SIGN UP";
    }
    signin.classList.toggle("display-none");
    signup.classList.toggle("display-none")
});


// Add submit event listener to the registration form
var registerForm = document.getElementById("register");
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    var fullName = document.getElementById("register-name").value;
    var email = document.getElementById("register-email").value;
    email = email.replace(/\s+/g, ' ').trim();
    var password = document.getElementById("register-password").value;

    // Create an object to store the registration data
    var userData = {
        fullName: fullName,
        email: email,
        password: password,
    };

    // Retrieve existing user data from local storage (if any)
    var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user data to the array
    existingUsers.push(userData);

    // Serialize the array and save it in local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Optionally, you can clear the registration form fields
    document.getElementById("register-name").value = "";
    document.getElementById("register-email").value = "";
    document.getElementById("register-password").value = "";

    // Provide a message or redirect to another page
    alert("Registration successful!");
});

// Add submit event listener to the login form
var loginForm = document.getElementById("login");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get login form values
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById("login-password").value;


    // Retrieve user data from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if there are any registered users
    if (users.length === 0) {
        alert("No registered users found.");
        return;
    }

    // Iterate through the users to find a match
    var loggedInUser = null;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.email === loginEmail && user.password === loginPassword) {
            loggedInUser = user;
            break;
        }
    }

    if (loggedInUser) {
        // alert("Login successful!");
        document.getElementById("login-email").value = "";
        document.getElementById("login-password").value = "";
        localStorage.setItem("user-name",user.fullName);
        localStorage.setItem("status","login"); 
        window.location.href = 'index.html';

    } else {
        alert("Login failed. Please check your credentials.");
    }
});
