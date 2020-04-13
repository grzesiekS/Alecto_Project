'use strict';

const addServiceDropDownMenu = function() {
    console.log('Add service Drop Down Menu function');

    const popUpMenu = 'service-sub',
        sectionService = '.our-services',
        serviceBox = '.service-box',
        serviceDescription = '.description';

    /* [DONE] Remove code in html for drop down menu in nav-bar section*/

    document.getElementById(popUpMenu).innerHTML = '';

    /* [IN PROGRESS] Get all  service names from our-service section*/

        const serviceElements = document.querySelector(sectionService);

    /* [DONE] For all service-box in our-service section*/

        const serviceBoxElements = serviceElements.querySelectorAll(serviceBox);

        for(let element of serviceBoxElements) {
            console.log('service-box: ', element);

        /* [DONE] Get description conent */

            const descContent = element.querySelector(serviceDescription);
            console.log('Description: ', descContent)

        /* [IN PROGRESS] Get service name from h1 tag */
        }
    /* create html code for drop down menu */

    /* Add html code to menu section for drop down menu */
}

addServiceDropDownMenu();