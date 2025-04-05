// 15 Questions for Career Quiz (No Yes/No)
const questions = [
    { question: "Which subject do you enjoy the most?", options: ["Mathematics", "Biology", "Commerce", "Arts", "Computer Science"] },
    { question: "What type of career interests you?", options: ["Engineering", "Medical", "Business & Finance", "Media & Arts", "Technology"] },
    { question: "Which activity do you enjoy the most?", options: ["Solving math problems", "Learning about the human body", "Understanding stock markets", "Writing & sketching", "Coding"] },
    { question: "Which profession inspires you the most?", options: ["Scientist", "Doctor", "Entrepreneur", "Journalist", "Software Engineer"] },
    { question: "What kind of work excites you?", options: ["Building machines", "Helping patients", "Managing money", "Writing & storytelling", "Developing software"] },
    { question: "Which subject do you score highest in?", options: ["Math", "Science", "Commerce", "English", "Computer Science"] },
    { question: "What is your dream job?", options: ["Software Engineer", "Doctor", "Chartered Accountant", "Artist", "Data Scientist"] },
    { question: "What type of higher studies do you prefer?", options: ["Engineering & Technology", "Medical & Health Sciences", "Finance & Business", "Arts & Communication", "Computers & AI"] },
    { question: "How do you like to study?", options: ["Solving equations", "Memorizing biology facts", "Analyzing business trends", "Reading literature", "Writing code"] },
    { question: "Which industry excites you?", options: ["IT & Software", "Healthcare", "Finance & Stock Market", "Film & Media", "Artificial Intelligence"] },
    { question: "Which skill best defines you?", options: ["Problem-solving", "Compassion & Care", "Money Management", "Creative Thinking", "Logical Coding"] },
    { question: "What kind of problems do you like solving?", options: ["Math puzzles", "Medical case studies", "Business decisions", "Writing stories", "Programming challenges"] },
    { question: "If you had to pick one, which class would you attend?", options: ["Physics & Chemistry", "Biology & Anatomy", "Economics & Business", "Literature & History", "Computer Science"] },
    { question: "Which career field seems exciting?", options: ["Engineering", "Medicine", "Finance", "Creative Writing", "Software Development"] },
    { question: "Where do you see yourself in 10 years?", options: ["Working in a tech company", "In a hospital treating patients", "Running a business", "Writing books & articles", "Developing AI systems"] }
];

// Dynamically add questions to the page
const questionContainer = document.getElementById("question-container");

document.addEventListener("DOMContentLoaded", () => {
    questions.forEach((q, index) => {
        let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
        q.options.forEach(option => {
            questionHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
        });
        questionContainer.innerHTML += questionHTML + "<br>";
    });
});

// Handle form submission
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let selectedAnswers = [];

    // Check all questions are answered
    let allAnswered = true;
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (!selected) {
            allAnswered = false;
        } else {
            selectedAnswers.push(selected.value);
        }
    });

    if (!allAnswered) {
        alert("⚠️ Please answer all the questions before submitting.");
        return;
    }

    let careerRecommendations = [];

    // Recommend Intermediate Streams (MPC, BiPC, etc.)
    if (selectedAnswers.includes("Mathematics") || selectedAnswers.includes("Engineering")) {
        careerRecommendations.push("MPC (Maths, Physics, Chemistry)");
    }
    if (selectedAnswers.includes("Biology") || selectedAnswers.includes("Doctor")) {
        careerRecommendations.push("BiPC (Biology, Physics, Chemistry)");
    }
    if (selectedAnswers.includes("Commerce") || selectedAnswers.includes("Finance")) {
        careerRecommendations.push("MEC (Maths, Economics, Commerce)");
    }
    if (selectedAnswers.includes("Business & Finance") || selectedAnswers.includes("Stock Market")) {
        careerRecommendations.push("CEC (Commerce, Economics, Civics)");
    }
    if (selectedAnswers.includes("Arts") || selectedAnswers.includes("Journalist")) {
        careerRecommendations.push("HUMANITIES (History, Political Science, English Literature)");
    }
    if (selectedAnswers.includes("Technology") || selectedAnswers.includes("Software Development")) {
        careerRecommendations.push("MPC with Computer Science");
    }

    // Recommend Diploma Courses
    if (selectedAnswers.includes("Engineering")) {
        careerRecommendations.push("Diploma in Engineering (Civil, Mechanical, Electrical, Electronics, Computer Science)");
    }
    if (selectedAnswers.includes("Medical") || selectedAnswers.includes("Biology")) {
        careerRecommendations.push("Diploma in Medical Lab Technology");
    }
    if (selectedAnswers.includes("Business & Finance") || selectedAnswers.includes("Commerce")) {
        careerRecommendations.push("Diploma in Accounting & Finance");
    }
    if (selectedAnswers.includes("Media & Arts")) {
        careerRecommendations.push("Diploma in Journalism & Mass Communication");
    }
    if (selectedAnswers.includes("Technology") || selectedAnswers.includes("Computers")) {
        careerRecommendations.push("Diploma in Computer Applications (DCA)");
    }

    if (careerRecommendations.length === 0) {
        careerRecommendations = ["General Intermediate or Diploma Options After 10th"];
    }

    // Store top 3 recommendations in localStorage
    localStorage.setItem("careerOptions", JSON.stringify(careerRecommendations.slice(0, 3)));

    // Redirect to results page
    window.location.href = "results.html";
});
