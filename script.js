// JavaScript Object containing the profile data
const profileData = {
    name: "Meeram Khalid",
    age: 21,
    bio: "Hello, I’m Meeram Khalid (میرام خالد), a 21-year-old passionate about web development and technology. With a keen interest in crafting intuitive user interfaces and solving complex problems, I am dedicated to leveraging my skills and enthusiasm in the tech industry. My journey in web development is driven by a commitment to continuous learning and innovation.",
    backgroundImg: "images/blueBlud.jpg",
    overlayImg: "images/WhatsApp_Image_2024-09-14_at_6.36.45_PM-removebg.png",
    resumeLink: "https://docs.google.com/document/d/1nhvS7VROJEM41WF6rhlPTS1pN2NsKOpgJDMC_wlC3ws/edit?usp=drive_linkf",
    navLinks: ["Home", "Education", "Skills & Certificates", "Projects", "Courses", "Experience", "Contact"]
};

// Function to populate the navigation bar
function populateNavbar() {
    const navbar = document.getElementById('navbar');
    profileData.navLinks.forEach(link => {
        const navItem = document.createElement('a');
        navItem.href = `#${link.replace(/ & /g, '').replace(/ /g, '').toLowerCase()}`;
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
function populateSkillsSection() {
    // Set the skills section heading
    document.getElementById('skillsHeading').textContent = skillsData.heading;

    // Set the background video
    const backgroundVideoElement = document.getElementById('backgroundVideo');
    const backgroundSource = document.createElement('source');
    backgroundSource.src = skillsData.backgroundVideo;
    backgroundSource.type = "video/mp4";
    backgroundVideoElement.appendChild(backgroundSource);

    // Populate the main videos
    const videosContainer = document.getElementById('skillsVideos');
    videosContainer.innerHTML = ''; // Clear any existing content

    skillsData.videos.forEach(video => {
        // Create the video element
        const videoElement = document.createElement('video');
        videoElement.classList.add('video');
        
        // Directly set properties for autoplay, loop, and muted
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.controls = true;  // Optional: Add controls for testing

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
const coursesData = {
    heading: "Courses",
    items: [
        "Computing Fundamentals and Programming",
        "Information and Communication Technology (ICT)",
        "Object Oriented Programming (OOP)",
        "Basic Electronics",
        "Digital Logic Design (DLD)",
        "Data Structures and Algorithm (DSA)",
        "Discrete Structures (DS)",
        "Linear Algebra",
        "Calculus",
        "Differential Equation",
        "Computer Architecture and Assembly Language",
        "Database"
    ]
};

// Function to populate the courses section
function populateCoursesSection() {
    // Set the courses heading
    document.querySelector('#CourseHeading').textContent = coursesData.heading; // Use '#' to select by ID

    // Populate the courses list
    const coursesList = document.querySelector('.courses-list');
    coursesList.innerHTML = ''; // Clear any existing content

    coursesData.items.forEach((course, index) => {
        // Create course item
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        
        // Create course number span
        const courseNumber = document.createElement('span');
        courseNumber.className = 'course-number';
        courseNumber.textContent = index + 1; // Course number
        
        // Create course name span
        const courseName = document.createElement('span');
        courseName.className = 'course-name';
        courseName.textContent = course; // Course name

        // Append spans to course item
        courseItem.appendChild(courseNumber);
        courseItem.appendChild(courseName);

        // Append course item to the courses list
        coursesList.appendChild(courseItem);
    });
}
const experienceData = {
    heading: "Experience",
    experiences: [
        {
            title: "Internship",
            description: "Worked at Aerodyne for 2 months as front end Intern (June-August)."
        },
        {
            title: "TAship",
            description: "Currently I am a DSA Teaching Assistant (TA)."
        }
    ]
};

// Function to populate the experience section
function populateExperienceSection() {
    // Set the experience heading
    document.querySelector('#ExperienceHeading').textContent = experienceData.heading;

    // Populate the experience container
    const experienceContainer = document.querySelector('.experience-text');
    experienceContainer.innerHTML = ''; // Clear any existing content

    experienceData.experiences.forEach((exp, index) => {
        // Create a heading for the experience
        const expTitle = document.createElement('h3');
        expTitle.textContent = `${index + 1}. ${exp.title}`; // Title with numbering

        // Create a paragraph for the description
        const expDescription = document.createElement('p');
        expDescription.textContent = exp.description; // Description

        // Append title and description to the experience container
        experienceContainer.appendChild(expTitle);
        experienceContainer.appendChild(expDescription);
    });
}
const contactData = {
    heading: "Contact",
    message: "Feel free to contact me!",
    info: [
        {
            icon: "fa-solid fa-envelope",
            label: "Email",
            value: "meeramkhalid2@gmail.com",
            link: "mailto:meeramkhalid2@gmail.com"
        },
        {
            icon: "fa-solid fa-phone",
            label: "Phone",
            value: "+92 323-0041996",
            link: "tel:+923230041996"
        },
        {
            icon: "fa-brands fa-linkedin",
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/meeram-khalid-7b7840208/",
            link: "https://www.linkedin.com/in/meeram-khalid-7b7840208/"
        }
    ]
};

// Function to populate the contact section
function populateContactSection() {
    // Set the contact heading
    document.querySelector('#contact .heading').textContent = contactData.heading;

    // Set the contact message
    document.querySelector('#contact p').textContent = contactData.message;

    // Populate the contact info
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.innerHTML = ''; // Clear any existing content

    contactData.info.forEach(contact => {
        const li = document.createElement('li');
        
        const icon = document.createElement('i');
        icon.className = contact.icon;

        const label = document.createElement('span');
        label.textContent = ` ${contact.label}: `;

        const link = document.createElement('a');
        link.href = contact.link;
        link.textContent = contact.value;
        link.target = "_blank";

        li.appendChild(icon);
        li.appendChild(label);
        li.appendChild(link);
        contactInfo.appendChild(li);
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
    populateCoursesSection();
    populateExperienceSection();
    populateContactSection();
};

// Attach the scroll event for highlighting the current section
window.onscroll = highlightCurrentSection;
