document.addEventListener("DOMContentLoaded", function () {
    // Get references to the login and registration forms
    var loginForm = document.getElementById("login-form");
    var registrationForm = document.getElementById("registration-form");

    // Get references to the login and registration buttons
    var loginButton = document.getElementById("login-button");
    var registerButton = document.getElementById("register-button");

    // Add click event listeners to the login and registration buttons
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
    });

    registerButton.addEventListener("click", function (e) {
        e.preventDefault();
        registrationForm.style.display = "block";
        loginForm.style.display = "none";
    });
});


// 
// Add submit event listener to the registration form
var registerForm = document.getElementById("register");
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    var fullName = document.getElementById("register-name").value;
    var email = document.getElementById("register-email").value;
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


