function init() {
    //console.log('Page loaded');
    const sectionActive = document.querySelectorAll('#navbar > li > span');
    const main = document.querySelector('main'); 
    
    main.setAttribute('class', 'about'); 
    
    sectionActive.forEach(button => {
        button.addEventListener('click', function() {
            let navID = button.getAttribute('data-nav-id'); 
            main.removeAttribute('class');
            main.setAttribute('class', navID);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);