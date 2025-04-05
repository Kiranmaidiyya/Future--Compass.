document.addEventListener("DOMContentLoaded", () => {
    const careerOptions = JSON.parse(localStorage.getItem("careerOptions")) || [];
    const resultContainer = document.getElementById("recommendations");
  
    if (careerOptions.length === 0) {
      resultContainer.innerHTML = "<p>No recommendations found. Please complete the quiz.</p>";
      return;
    }
  
    resultContainer.innerHTML = "<h3 class='text-lg font-semibold mb-2'>Based on your answers, we recommend:</h3>";
  
    careerOptions.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.className = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600";
  
      button.onclick = () => {
        localStorage.setItem("selectedCareer", option);
        window.location.href = "roadmap.html";
      };
  
      resultContainer.appendChild(button);
      resultContainer.appendChild(document.createElement("br"));
    });
  });
  