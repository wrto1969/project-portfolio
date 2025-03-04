document.addEventListener('DOMContentLoaded', function() {
    // Example of adding a click event listener to the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
/*Adding an onclick event to a button
//const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function() {
    let navID = myButton.getAttribute('data-nav-id');
    alert('Button clicked!'+ navID);
});*/
const element = document.getElementById('navbar');
const myButton = document.querySelectorAll('#navbar > li > span');

const main = document.getSelection('main');

myButton.forEach(button => {
    button.addEventListener('click', function() {
        let navID = button.getAttribute('data-nav-id');
        alert('Button clicked!'+ navID);
    });
});