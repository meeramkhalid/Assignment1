// JavaScript Object containing the profile data
const profileData = {
    name: "Meeram Khalid",
    age: 21,
    bio: "Hello, I’m Meeram Khalid (میرام خالد), a 21-year-old passionate about web development and technology. With a keen interest in crafting intuitive user interfaces and solving complex problems, I am dedicated to leveraging my skills and enthusiasm in the tech industry. My journey in web development is driven by a commitment to continuous learning and innovation.",
    backgroundImg: "images/blueBlud.jpg",
    overlayImg: "images/WhatsApp_Image_2024-09-14_at_6.36.45_PM-removebg.png",
    resumeLink: "C:\\Users\\Meeram Khalid\\Downloads\\Meeram Khalid_Resume.pdf",
    navLinks: ["Home", "Education", "Skills & Certificates", "Projects", "Courses", "Experience", "Contact"]
};

// Function to populate the navigation bar
function populateNavbar() {
    const navbar = document.getElementById('navbar');
    profileData.navLinks.forEach(link => {
        const navItem = document.createElement('a');
        navItem.href = `#${link.toLowerCase().replace(/ /g, '')}`;
        navItem.textContent = link;
        navItem.classList.add('nav-link');
        navbar.appendChild(navItem);
    });
}

// Function to populate the "About Me" section
function populateHomeSection() {
    document.getElementById('aboutMeHeading').textContent = `About Me`;
    document.getElementById('aboutMeText').textContent = profileData.bio;
    document.getElementById('backgroundImage').src = profileData.backgroundImg;
    document.getElementById('overlayImage').src = profileData.overlayImg;
    document.getElementById('cvButton').href = profileData.resumeLink;
}

// Function to highlight the current section link while scrolling
function highlightCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) { // Offset by 50 to trigger slightly before section is fully in view
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Function to toggle lists (such as for skills or projects)
function toggleList(id) {
    const list = document.getElementById(id);
    list.classList.toggle('hidden'); // Toggle between showing and hiding the list
}

// Function to handle accordion behavior
function initializeAccordions() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function() {
            const panel = this.nextElementSibling;
            panel.style.display = (panel.style.display === "block") ? "none" : "block";
        });
    });
}

// Call the functions to populate content when the page loads
window.onload = function() {
    populateNavbar();
    populateHomeSection();
    initializeAccordions();
};

// Attach the scroll event for highlighting the current section
window.onscroll = highlightCurrentSection;
