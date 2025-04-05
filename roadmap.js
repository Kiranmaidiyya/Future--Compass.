const careerRoadmaps = {
    "MPC (Maths, Physics, Chemistry)": `
        graph LR;
            A[Foundation] --> A1[Mathematics]
            A --> A2[Physics]
            A --> A3[Chemistry]
            
            B[Intermediate Course] --> B1[MPC Stream]
            
            C[Career Paths] --> C1[Engineering]
            C --> C2[Architecture]
            C --> C3[Defence Services]
            
            D[Higher Education] --> D1[B.Tech/B.E]
            D --> D2[B.Sc in Physical Sciences]
            D --> D3[Integrated M.Sc Programs]
    `,

    "BiPC (Biology, Physics, Chemistry)": `
        graph LR;
            A[Foundation] --> A1[Biology]
            A --> A2[Physics]
            A --> A3[Chemistry]
            
            B[Intermediate Course] --> B1[BiPC Stream]
            
            C[Career Paths] --> C1[Medicine]
            C --> C2[Pharmacy]
            C --> C3[Biotechnology]
            
            D[Higher Education] --> D1[MBBS/BDS/BAMS]
            D --> D2[B.Sc in Biotechnology/Microbiology]
            D --> D3[B.Pharm/D.Pharm]
    `,

    "MEC (Maths, Economics, Commerce)": `
        graph LR;
            A[Foundation] --> A1[Mathematics]
            A --> A2[Economics]
            A --> A3[Commerce]
            
            B[Intermediate Course] --> B1[MEC Stream]
            
            C[Career Paths] --> C1[Chartered Accountant]
            C --> C2[Banking Sector]
            C --> C3[Stock Market Analyst]
            
            D[Higher Education] --> D1[B.Com]
            D --> D2[BA in Economics]
            D --> D3[BBA/MBA in Finance]
    `,

    "CEC (Commerce, Economics, Civics)": `
        graph LR;
            A[Foundation] --> A1[Commerce]
            A --> A2[Economics]
            A --> A3[Civics]
            
            B[Intermediate Course] --> B1[CEC Stream]
            
            C[Career Paths] --> C1[Lawyer]
            C --> C2[Government Officer]
            C --> C3[Banking Sector]
            
            D[Higher Education] --> D1[BA in Political Science]
            D --> D2[BBA/MBA]
            D --> D3[LLB for Law]
    `,

    "HUMANITIES (History, Political Science, English Literature)": `
        graph LR;
            A[Foundation] --> A1[History]
            A --> A2[Political Science]
            A --> A3[English Literature]
            
            B[Intermediate Course] --> B1[Humanities Stream]
            
            C[Career Paths] --> C1[Journalism]
            C --> C2[Public Administration]
            C --> C3[Teaching]
            
            D[Higher Education] --> D1[BA in Journalism]
            D --> D2[BA in Political Science]
            D --> D3[MA/PhD in Humanities]
    `,

    "MPC with Computer Science": `
        graph LR;
            A[Foundation] --> A1[Mathematics]
            A --> A2[Physics]
            A --> A3[Computer Science]
            
            B[Intermediate Course] --> B1[MPC with CS]
            
            C[Career Paths] --> C1[Software Developer]
            C --> C2[Data Scientist]
            C --> C3[Cyber Security Specialist]
            
            D[Higher Education] --> D1[B.Tech in CS/IT]
            D --> D2[B.Sc in Computer Science]
            D --> D3[M.Tech/MCA]
    `,

    "Diploma in Engineering (Civil, Mechanical, Electrical, Electronics, Computer Science)": `
    graph LR;
        A[Foundation] --> A1[Mathematics]
        A --> A2[Physics]
        A --> A3[Technical Drawing]
        
        B[Diploma Courses] --> B1[Civil Engineering]
        B --> B2[Mechanical Engineering]
        B --> B3[Electrical Engineering]
        B --> B4[Electronics Engineering]
        B --> B5[Computer Science Engineering]
        
        C[Career Paths] --> C1[Junior Engineer]
        C --> C2[Technician]
        C --> C3[Assistant Engineer]
        
        D[Higher Education] --> D1[BE/B.Tech]
        D --> D2[AMIE]
        D --> D3[MBA in Engineering Management]


`,
    "Diploma in Medical Lab Technology": `
        graph LR;
            A[Foundation] --> A1[Biology]
            A --> A2[Chemistry]
            A --> A3[Medical Science Basics]
            
            B[Diploma Courses] --> B1[Medical Lab Technology]
            B --> B2[Radiology & Imaging]
            B --> B3[Pathology]
            
            C[Career Paths] --> C1[Lab Technician]
            C --> C2[Radiology Technician]
            C --> C3[Phlebotomist]
            
            D[Higher Education] --> D1[B.Sc MLT]
            D --> D2[Advanced Medical Certifications]
            D --> D3[M.Sc MLT]
    `,

    "Diploma in Accounting & Finance": `
        graph LR;
            A[Foundation] --> A1[Accounting Principles]
            A --> A2[Business Mathematics]
            A --> A3[Financial Management]
            
            B[Diploma Courses] --> B1[Accounting & Finance]
            B --> B2[Taxation]
            B --> B3[Banking & Insurance]
            
            C[Career Paths] --> C1[Accountant]
            C --> C2[Financial Analyst]
            C --> C3[Banking Executive]
            
            D[Higher Education] --> D1[B.Com]
            D --> D2[CA/ICWA/CS]
            D --> D3[MBA in Finance]
    `,

    "Diploma in Journalism & Mass Communication": `
        graph LR;
            A[Foundation] --> A1[Writing & Reporting]
            A --> A2[Media Ethics]
            A --> A3[Photography & Videography]
            
            B[Diploma Courses] --> B1[Print Journalism]
            B --> B2[TV & Broadcast Journalism]
            B --> B3[Digital Media & Content Writing]
            
            C[Career Paths] --> C1[Journalist]
            C --> C2[News Reporter]
            C --> C3[Content Writer]
            
            D[Higher Education] --> D1[BA in Journalism]
            D --> D2[Mass Communication & Media Studies]
            D --> D3[Advertising & Public Relations]
    `,

    "Diploma in Computer Applications (DCA)": `
        graph LR;
            A[Foundation] --> A1[Basics of Computers]
            A --> A2[Programming Fundamentals]
            A --> A3[Database Management]
            
            B[Diploma Courses] --> B1[Computer Applications]
            B --> B2[Web Development]
            B --> B3[Software Engineering]
            
            C[Career Paths] --> C1[Software Developer]
            C --> C2[IT Support Specialist]
            C --> C3[Web Designer]
            
            D[Higher Education] --> D1[BCA]
            D --> D2[MCA]
            D --> D3[Cloud Computing & AI Certifications]
    `,

    "General Intermediate or Diploma Options After 10th": `
        graph LR;
            A[Foundation] --> A1[General Education]
            A --> A2[Basic Computer Skills]
            A --> A3[Communication & Soft Skills]
            
            B[Intermediate Streams] --> B1[Science]
            B --> B2[Commerce]
            B --> B3[Arts/Humanities]
            
            C[Diploma Courses] --> C1[Engineering]
            C --> C2[Medical Lab]
            C --> C3[Multimedia & Animation]
            
            D[Career Paths] --> D1[Higher Studies]
            D --> D2[Government Jobs]
            D --> D3[Entrepreneurship]
    `,
};



// roadmap.js - Fixed with error handling

function loadRoadmap() {
    const container = document.getElementById("roadmap-container");
    const career = localStorage.getItem("selectedCareer");

    // Debug output
    console.log("Attempting to load roadmap for:", career);
    console.log("Available roadmaps:", Object.keys(careerRoadmaps));
    console.log(careerRoadmaps["Diploma in Engineering"]);

    if (!career || !careerRoadmaps[career]) {
        container.innerHTML = `
            <div class="error">
                <h2>Roadmap Not Available</h2>
                <p>We couldn't find the requested career path.</p>
                <a href="results.html">← Back to Results</a>
                <p>Technical details: ${career ? `"${career}" not found` : "No career selected"}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h2>${career} Roadmap</h2>
        <div class="mermaid">${careerRoadmaps[career]}</div>
        <button onclick="window.history.back()">← Back</button>
    `;

    // Reinitialize Mermaid if available
    if (typeof mermaid !== 'undefined') {
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    } else {
        console.error("Mermaid.js not loaded!");
    }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", loadRoadmap);