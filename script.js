var _a;
// TypeScript code for the toggle functionality
(_a = document.querySelector('.toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var experienceSection = document.querySelector('.skills');
    // Check if the section is currently hidden or shown and toggle accordingly
    if (experienceSection.style.display === 'none') {
        experienceSection.style.display = 'block'; // Show the section
    }
    else {
        experienceSection.style.display = 'none'; // Hide the section
    }
});
