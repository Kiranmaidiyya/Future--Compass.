document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('button');

    if (startBtn) {
        startBtn.addEventListener('click', function() {
            // Redirect to quiz page
            window.location.href = "quiz.html";
        });
    }
});
