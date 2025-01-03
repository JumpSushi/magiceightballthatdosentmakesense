//make a pr if you'd like to add some more of these stupid answers

const answers= [
    "Ask your neighbour's pet rock",
    "The cheese of truth speakes of forgotten tambourines",
    "Only on alternate Thursdays when the moon is full",
    "Consult the wisdom of the ancient rubber duck",
    "The answer lies in the lint of your pocket",
    "When the cows come home, but only if they bring pizza",
    "Seek the advice of the nearest garden gnome",
    "The stars align only for those who dance the macarena",
    "In the reflection of a spoon, you will find clarity",
    "Only if the wind whispers your name thrice",
    "The truth is hidden in the last place you look",
    "Install Fedora Linux, then we'll talk",
    "42+1-1",
    "Have you tried turning yourself off and on again?",
    "My Eight Ball is currently in a meeting",
    "I'm sorry, I can't do that Dave",
    "The cake was a lie",
    "Does anyone know? Asking for a friend",
    "if print('true') dosen't return true, yes",
    "The answer lies within yesterday's tommorow",
    "check your main branch on guthib.com",
    "Error 404",
    "Ask GlaDos",
]

const questionInput = document.getElementById('question');
const eightBall = document.getElementById('eight-ball');
const answerWindow = document.getElementById('answer-window');
const answerText = document.getElementById('answer-text');
const shakeButton = document.getElementById('shake-button');

function shakeBall() {
    if (!questionInput.value.trim()) return;
    eightBall.classList.add('shake');
    answerWindow.style.opacity = '0';
    shakeButton.disabled = true;
    setTimeout(() => {
        eightBall.classList.remove('shake');
        answerText.textContent = answers[Math.floor(Math.random() * answers.length)];
        answerWindow.style.opacity = '1';
        shakeButton.disabled = false;
    }, 1000);
}

questionInput.addEventListener('input', () => {
    shakeButton.disabled = !questionInput.value.trim();
});

eightBall.addEventListener('click', shakeBall);
shakeButton.addEventListener('click', shakeBall);