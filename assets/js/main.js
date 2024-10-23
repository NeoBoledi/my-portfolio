// Change the background of navbar on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle
    (
        'window-scroll',window.scrollY>0
    )
      
})

// NavBar Responsiveness
const navMenu = document.querySelector('.nav__menu');
const openNavBtn = document.querySelector('#open-menu-btn');
const closeNavBtn = document.querySelector('#close-menu-btn');

const openNav = () => {
    navMenu.classList.add('open'); 
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navMenu.classList.remove('open'); 
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


 // Function to update the project details section
 document.addEventListener("DOMContentLoaded", function() {
    const projectList = document.querySelectorAll(".project");
    const projectDetails = document.getElementById("projectDetails");

    projectList.forEach(project => {
        project.addEventListener("click", function() {
            const projectImage = project.getAttribute("data-image")
            const projectName = project.getAttribute("data-name");
            const projectDescription = project.getAttribute("data-description");
            const projectTools = project.getAttribute("data-tools");
            const projectGithub = project.getAttribute("data-github");
            const projectLive = project.getAttribute("data-live");
            
            // Populate the project details section
            projectDetails.innerHTML = `
                <img src="${projectImage}" alt="${projectName}" class="projects__image" width="300" height="300"/>
                <h5>Project Name: <span>${projectName}</span></h5>
                <p>Description: <span>${projectDescription}</span></p>
                <p>Tools: <span>${projectTools}</span></p>
                <div class="projects__details__btn">
                    <a href="${projectGithub}" class="btn" target="_blank">Github</a>
                    <a href="${projectLive}" class="btn" target="_blank">Live</a>
                </div>
            `;
        });
    });
});



// Group The Skills

function filterSkills(category) {
    const allSkills = document.querySelectorAll('#skill-list li');

    if (category === 'All') {
        allSkills.forEach(skill => skill.style.display = 'block');
    } else {
        allSkills.forEach(skill => {
            if (skill.classList.contains(category)) {
                skill.style.display = 'block';
            } else {
                skill.style.display = 'none';
            }
        });
    }
}

// Get Form Data
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Your Submitted Data:</h3>
                           <p><strong>Name:</strong> ${name}</p>
                           <p><strong>Surname:</strong> ${surname}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Message:</strong> ${message}</p>`;

    this.reset();
});



document.addEventListener("DOMContentLoaded", function () {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const navMenu = document.getElementById("nav-menu");

    // Check if the elements exist before adding event listeners
    if (openMenuBtn && closeMenuBtn && navMenu) {
        // Open Menu
        openMenuBtn.addEventListener("click", function () {
            navMenu.classList.add("active");
            openMenuBtn.style.display = "none";
            closeMenuBtn.style.display = "inline-block";
        });

        // Close Menu
        closeMenuBtn.addEventListener("click", function () {
            navMenu.classList.remove("active");
            closeMenuBtn.style.display = "none";
            openMenuBtn.style.display = "inline-block";
        });
    } else {
        console.error("Menu buttons or nav menu not found in the DOM.");
    }
});
