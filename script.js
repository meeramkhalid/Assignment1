// Get all sections and nav links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.navbar a');

// Function to highlight the current section link
window.onscroll = () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) { // Use scrollY instead of pageYOffset
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
};
function toggleList(id) {
    const list = document.getElementById(id);
    list.classList.toggle('hidden'); // Toggle between showing and hiding the list
}
// Get all elements with class="accordion"
var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        // Toggle between hiding and showing the active panel
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
