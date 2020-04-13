{
    'use strict';

    let htmlCode = '';

    const addServiceDropDownMenu = function() {
        console.log('Add service Drop Down Menu function');

        const popUpMenu = 'service-sub',
            sectionService = '.our-services',
            serviceBox = '.service-box',
            serviceDescription = '.description';

        /* [DONE] Remove code in html for drop down menu in nav-bar section*/

        const serviceSubMenu = document.getElementById(popUpMenu);
        serviceSubMenu.innerHTML = '';

        /* [DONE] Get all  service names from our-service section*/

            const serviceElements = document.querySelector(sectionService);

        /* [DONE] For all service-box in our-service section*/

            const serviceBoxElements = serviceElements.querySelectorAll(serviceBox);

            for(let element of serviceBoxElements) {
                console.log('service-box: ', element);

            /* [DONE] Get description conent */

                const descContent = element.querySelector(serviceDescription);
                console.log('Description: ', descContent)

            /* [DONE] Get service name from h1 tag */
            
                const h1Name = descContent.querySelector('h1').innerHTML;
                console.log('h1 content:', h1Name);
            
            /* [DONE] create html code for drop down menu */

                const html = '<li><a href="#">' + h1Name + '</a></li>';
                htmlCode += html;
                
            }

            console.log('HTML Code: ' + htmlCode);

        /* [DONE] Add html code to menu section for drop down menu */

        serviceSubMenu.insertAdjacentHTML('afterbegin', htmlCode);

    }

    const aboutUsClickHandler = function() {
        event.preventDefault();

        const clickedElmenet = this;

        console.log('Button was clicked!')
        console.log(event);

        /* [IN PROGRESS] Remove active-btn and active calss */

        /* Add class active-btn for currently clicked button */

        /* Get parent of the clicked button */

        /* Get all children of the parent */
        
        /* Add active class for h3 tag */

        /* Add active class for p tag */
    }

    addServiceDropDownMenu();
    
    const buttons = document.querySelectorAll('.about-box a');

    for(let button of buttons) {
        button.addEventListener('click', aboutUsClickHandler);
    }

}