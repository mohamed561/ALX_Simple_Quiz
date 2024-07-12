// Define the checkAnswer function
function checkAnswer() {
    // Set the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedRadioButton = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if an answer was selected
    if (selectedRadioButton) {
        const userAnswer = selectedRadioButton.value;
        
        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedbackElement.textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
