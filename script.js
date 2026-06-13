// ======================================
// CYBERSHIELD JAVASCRIPT
// ======================================

console.log("CyberShield Loaded Successfully");


// ======================================
// PASSWORD STRENGTH CHECKER
// ======================================

function checkPasswordStrength() {

    const password =
        document.getElementById("passwordInput").value;

    const result =
        document.getElementById("passwordResult");

    const strengthBar =
        document.getElementById("strengthBar");

    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    if (score <= 2) {

        result.innerHTML =
            "🔴 Weak Password";

        result.style.color =
            "#ef4444";

        if (strengthBar) {
            strengthBar.style.width = "30%";
            strengthBar.style.background =
                "#ef4444";
        }
    }

    else if (score <= 4) {

        result.innerHTML =
            "🟠 Medium Password";

        result.style.color =
            "#f59e0b";

        if (strengthBar) {
            strengthBar.style.width = "65%";
            strengthBar.style.background =
                "#f59e0b";
        }
    }

    else {

        result.innerHTML =
            "🟢 Strong Password";

        result.style.color =
            "#22c55e";

        if (strengthBar) {
            strengthBar.style.width = "100%";
            strengthBar.style.background =
                "#22c55e";
        }
    }
}



// ======================================
// PASSWORD GENERATOR
// ======================================

function generatePassword() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 12; i++) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );

        password +=
            characters[randomIndex];
    }

    document.getElementById(
        "generatedPassword"
    ).innerHTML = password;
}



// ======================================
// COPY PASSWORD
// ======================================

function copyPassword() {

    const password =
        document.getElementById(
            "generatedPassword"
        ).innerText;

    if (password === "") {

        alert(
            "Generate a password first."
        );

        return;
    }

    navigator.clipboard
        .writeText(password);

    alert(
        "Password copied successfully!"
    );
}



// ======================================
// URL CHECKER
// ======================================

function checkURL() {

    const url =
        document.getElementById(
            "urlInput"
        ).value.toLowerCase();

    const result =
        document.getElementById(
            "urlResult"
        );

    let risk = 0;

    const suspiciousWords = [

        "login",
        "verify",
        "secure",
        "update",
        "bank",
        "account",
        "free",
        "winner"

    ];

    suspiciousWords.forEach(word => {

        if (url.includes(word)) {
            risk++;
        }

    });

    if (url.includes("@")) {
        risk++;
    }

    if (url.includes("-")) {
        risk++;
    }

    if (url.length > 50) {
        risk++;
    }

    if (risk >= 2) {

        result.innerHTML =
            "⚠️ Suspicious URL";

        result.style.color =
            "#ef4444";
    }

    else {

        result.innerHTML =
            "✅ URL Looks Safe";

        result.style.color =
            "#22c55e";
    }
}



// ======================================
// QUIZ QUESTIONS
// ======================================

const quizQuestions = [

    {
        question:
            "Should you share your OTP with anyone?",
        answer: false
    },

    {
        question:
            "Is Two-Factor Authentication useful?",
        answer: true
    },

    {
        question:
            "Should you click unknown email links?",
        answer: false
    },

    {
        question:
            "Are strong passwords important?",
        answer: true
    },

    {
        question:
            "Is public Wi-Fi always secure?",
        answer: false
    }

];

let currentQuestion = 0;
let score = 0;



// ======================================
// LOAD QUIZ
// ======================================

function loadQuiz() {

    const questionBox =
        document.getElementById(
            "quizQuestion"
        );

    if (questionBox) {

        questionBox.innerHTML =
            quizQuestions[currentQuestion]
            .question;
    }
}



// ======================================
// QUIZ ANSWER
// ======================================

function answerQuiz(userAnswer) {

    if (
        userAnswer ===
        quizQuestions[currentQuestion]
        .answer
    ) {

        score++;
    }

    currentQuestion++;

    if (
        currentQuestion <
        quizQuestions.length
    ) {

        document.getElementById(
            "quizQuestion"
        ).innerHTML =
            quizQuestions[currentQuestion]
            .question;
    }

    else {

        document.getElementById(
            "quizQuestion"
        ).innerHTML =
            "🎉 Quiz Completed!";

        document.getElementById(
            "quizResult"
        ).innerHTML =
            "Your Score: " +
            score +
            "/" +
            quizQuestions.length;
    }
}



// ======================================
// RESTART QUIZ
// ======================================

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById(
        "quizResult"
    ).innerHTML = "";

    loadQuiz();
}



// ======================================
// AUTO LOAD QUIZ
// ======================================

window.onload = function () {

    if (
        document.getElementById(
            "quizQuestion"
        )
    ) {

        loadQuiz();
    }

    console.log(
        "Welcome to CyberShield"
    );
};