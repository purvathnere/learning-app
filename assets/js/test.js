//  login/logout
let log=localStorage.getItem("status");
if(log=="login"){

}else{
    window.location.href = '../../login.html';
}

// ....?
   // JavaScript for countdown timer
   const countdown = document.getElementById('timer');
   let timeLeft = 300; // 5 minutes in seconds

   function updateTimer() {
       const minutes = Math.floor(timeLeft / 60);
       const seconds = timeLeft % 60;
       countdown.textContent = `Time remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
       if (timeLeft === 0) {
           clearInterval(timerInterval);
           submitQuiz();
       }
       timeLeft--;
   }

   const timerInterval = setInterval(updateTimer, 1000);

   // JavaScript for quiz submission and result
   const quizForm = document.getElementById('quiz-form');
   const resultDisplay = document.getElementById('result');

   quizForm.addEventListener('submit', function(event) {
       event.preventDefault();
       clearInterval(timerInterval); // Stop the timer
       submitQuiz();
   });

   function submitQuiz() {
       // Calculate and display the result
       const score = calculateScore();
       resultDisplay.textContent = `You scored ${score} out of 5.`;
   }

   function calculateScore() {
       let score = 0;
       const answers = ['c', 'a', 'b', 'c', 'd']; // Add correct answers for each question

       for (let i = 1; i <= 5; i++) {
           const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
           if (selectedAnswer) {
               if (selectedAnswer.value === answers[i - 1]) {
                   score++;
               }
           }
       }

       return score;
   }

   let user_name=localStorage.getItem("user-name")
   document.getElementById("quizUser").innerText = user_name;