// Accordion script 

document.addEventListener('DOMContentLoaded', () => {
    const productCard = document.querySelector('.desktop-product-info-card');
    const accordionItems = document.querySelectorAll('.info-accordion-item');


    // --- Accordion Logic ---
    accordionItems.forEach(item => {
        const header = item.querySelector('.info-accordion-header');

        if (header) {
            header.addEventListener('click', () => {
                const content = item.querySelector('.info-accordion-content');
                const icon = header.querySelector('.accordion-toggle-icon');
                const isAlreadyOpen = item.classList.contains('is-active');

                // Close all other accordions
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('is-active');
                        const otherContent = otherItem.querySelector('.info-accordion-content');
                        if (otherContent) {
                            otherContent.style.maxHeight = '0';
                        }
                        const otherIcon = otherItem.querySelector('.accordion-toggle-icon');
                        if (otherIcon) {
                            otherIcon.textContent = '+';
                        }
                    }
                });

                // Open or close the clicked accordion
                if (!isAlreadyOpen) {
                    item.classList.add('is-active');
                    if (content) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                    if (icon) {
                        icon.textContent = '-';
                    }
                } else {
                    item.classList.remove('is-active');
                    if (content) {
                        content.style.maxHeight = '0';
                    }
                    if (icon) {
                        icon.textContent = '+';
                    }
                }
            });
        }
    });


    // Ensure the first accordion item (if active by default) is open on page load
    if (accordionItems.length > 0) {
        const firstAccordionItem = accordionItems[0];
        if (firstAccordionItem && firstAccordionItem.classList.contains('is-active')) {
            const firstContent = firstAccordionItem.querySelector('.info-accordion-content');
            if (firstContent) {
                firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            }
        }
    }

    // --- Size Selector Logic ---
    if (productCard) {
        const sizeButtons = productCard.querySelectorAll('.info-card-size-selector button');
        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                sizeButtons.forEach(btn => btn.classList.remove('is-active'));
                button.classList.add('is-active');
            });
        });
    }
});

// Accordion script -------------- end -------------------->


// time logic at here -------------------------------------->


document.addEventListener('DOMContentLoaded', () => {
    // Function to update time in both sidebar & footer
    function updateClock() {
        let now = new Date();


        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        let timeString = `[ INDIA ${hours}:${minutes}:${seconds} HH ]`;
        let sidebarTime = document.getElementById("time1");
        let footerTime = document.getElementById("bott3");

        if (sidebarTime) sidebarTime.textContent = timeString;
        if (footerTime) footerTime.textContent = timeString;
    }

    setInterval(updateClock, 1000);
    updateClock();
});