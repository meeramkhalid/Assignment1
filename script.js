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
// Get all accordion buttons
const accordions = document.querySelectorAll(".accordion");

// Loop through each accordion and add event listener
accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
        const panel = this.nextElementSibling;

        // Toggle between showing and hiding the panel
        panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
});
