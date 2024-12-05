const aboutButton = document.querySelector('.nav-links a[href="#About"]'); // Select the "About" button
const aboutConferenceSection = document.querySelector('.about-conference'); // Select the target section

aboutButton.addEventListener('click', () => {
  aboutConferenceSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the section
});