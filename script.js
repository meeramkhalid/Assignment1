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
const educationData = {
    heading: "Education",
    details: [
        {
            level: "Schooling",
            year: "2020",
            description: "Completed Matriculation from APS Azam Garrison, securing 96% under FBISE."
        },
        {
            level: "Intermediate",
            year: "2022",
            description: "Graduated from Kinnaird College for Women with 80% in Intermediate."
        },
        {
            level: "University",
            year: "2022-2026",
            description: "Currently enrolled in 3rd year in BSCS in Information Technology University."
        }
    ],
    icon: "images/education.png"  // Path to the education icon image
};
// Function to populate the education section
function populateEducationSection() {
    // Set the education heading
    document.getElementById('educationHeading').textContent = educationData.heading;

    // Set the education icon
    document.getElementById('educationIcon').src = educationData.icon;

    // Populate the education details list
    const educationContainer = document.getElementById('educationDetails');
    educationContainer.innerHTML = ''; // Clear any existing content

    educationData.details.forEach(detail => {
        // Create the list item
        const listItem = document.createElement('li');
        
        // Create the highlighted name span
        const levelSpan = document.createElement('span');
        levelSpan.classList.add('highlighted-name');
        levelSpan.textContent = `${detail.level} (${detail.year})`;

        // Create the description paragraph
        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = detail.description;

        // Append the span and paragraph to the list item
        listItem.appendChild(levelSpan);
        listItem.appendChild(descriptionPara);

        // Append the list item to the container
        educationContainer.appendChild(listItem);
    });
}
const skillsData = {
    heading: "Skills & Certificates",
    backgroundVideo: "images/WhatsApp Video 2024-09-15 at 12.22.53 AM.mp4",
    videos: [
        {
            title: "Skills Video",
            src: "images/skills.mp4",
            type: "video/mp4"
        },
        {
            title: "Certificates Video",
            src: "images/certificates.mp4",
            type: "video/mp4"
        }
    ]
};
// Function to populate the skills & certificates section
function populateSkillsSection() {
    // Set the skills section heading
    document.getElementById('skillsHeading').textContent = skillsData.heading;

    // Set the background video
    const backgroundVideoElement = document.getElementById('backgroundVideo');
    backgroundVideoElement.src = skillsData.backgroundVideo;

    // Populate the main videos
    const videosContainer = document.getElementById('skillsVideos');
    videosContainer.innerHTML = ''; // Clear any existing content

    skillsData.videos.forEach(video => {
        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.classList.add('video');
        videoElement.setAttribute('autoplay', true);
        videoElement.setAttribute('loop', true);
        videoElement.setAttribute('muted', true);

        // Create the source element for the video
        const sourceElement = document.createElement('source');
        sourceElement.src = video.src;
        sourceElement.type = video.type;

        // Append the source to the video element
        videoElement.appendChild(sourceElement);

        // Append the video element to the container
        videosContainer.appendChild(videoElement);
    });
}
const projectsData = {
    heading: "Projects",
    categories: [
        {
            title: "C++ Projects",
            items: [
                "Gomoku",
                "Bead 12 Game",
                "Shogi (Japanese Chess)",
                "Snake Game",
                "Chess",
                "Ludo",
                "Excel",
                "DOS and Text Editor",
                "Search Engine"
            ]
        },
        {
            title: "C# Projects",
            items: [
                "Scientific Calculator"
            ]
        },
        {
            title: "Python Projects",
            items: [
                "Paint Brush App"
            ]
        },
        {
            title: "Arduino Projects",
            items: [
                "Darkness Detector Circuit"
            ]
        },
        {
            title: "NoSQL Projects",
            items: [
                "Hotel Management System Website"
            ]
        }
    ]
};
// Function to populate the projects section
function populateProjectsSection() {
    // Populate the heading
    document.getElementById('projectsHeading').textContent = projectsData.heading;

    // Populate the project categories
    const projectsContainer = document.querySelector('.projects-container');
    projectsData.categories.forEach(category => {
        // Create accordion button
        const accordionButton = document.createElement('button');
        accordionButton.className = 'accordion';
        accordionButton.textContent = category.title;

        // Create panel for the category
        const panel = document.createElement('div');
        panel.className = 'panel';
        
        // Create the list for the items
        const ul = document.createElement('ul');
        category.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = '● ' + item;
            ul.appendChild(li);
        });
        
        panel.appendChild(ul);
        projectsContainer.appendChild(accordionButton);
        projectsContainer.appendChild(panel);

        // Add click event to the accordion button
        accordionButton.addEventListener('click', function() {
            panel.classList.toggle('show'); // Toggle the 'show' class
        });
    });
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
    populateEducationSection();
    populateSkillsSection();
    populateProjectsSection();
};

// Attach the scroll event for highlighting the current section
window.onscroll = highlightCurrentSection;
