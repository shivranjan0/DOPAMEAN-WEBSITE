
// Simple script for the desktop clock
function updateTime() {
    const timeElement = document.getElementById('time1');
    if (timeElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeElement.textContent = `[ INDIA  ${timeString} ]`;
    }
}
setInterval(updateTime, 1000);
updateTime();



// =======================================================
// ============== footer accordian script  ===============
// =======================================================


document.addEventListener('DOMContentLoaded', () => {
    // --- Live Clock for Footer ---
    const timeElement = document.getElementById('mobile-time');
    function updateLiveTime() {
        if (!timeElement) return;
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    updateLiveTime();
    setInterval(updateLiveTime, 1000);

    // --- Accordion Logic ---
    const accordionItems = document.querySelectorAll('.dpm-accordion-item');
    const animationOptions = {
        duration: 400,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
    };

    function toggleAccordion(item) {
        const content = item.querySelector('.dpm-accordion-content');
        const isOpen = item.classList.contains('is-open');
        item.dataset.animating = 'true';

        const keyframes = isOpen
            ? [{ height: `${content.scrollHeight}px`, opacity: 1 }, { height: '0px', opacity: 0 }]
            : [{ height: '0px', opacity: 0 }, { height: `${content.scrollHeight}px`, opacity: 1 }];

        const animation = content.animate(keyframes, animationOptions);
        item.classList.toggle('is-open');

        animation.onfinish = () => {
            if (item.classList.contains('is-open')) {
                content.style.height = 'auto';
            }
            delete item.dataset.animating;
        };
    }

    accordionItems.forEach(item => {
        const header = item.querySelector('.dpm-accordion-header');
        const content = item.querySelector('.dpm-accordion-content');

        // Set initial state for all items
        if (item.classList.contains('is-open')) {
            content.style.height = 'auto'; // Allows default-open item to be responsive
        } else {
            content.style.height = '0px';
            content.style.opacity = '0';
            content.style.overflow = 'hidden';
        }

        header.addEventListener('click', () => {
            if (item.dataset.animating) return;
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('is-open')) {
                    toggleAccordion(otherItem);
                }
            });
            toggleAccordion(item);
        });
    });
});





// =======================================================
// ============== footer time script  =====================
// =======================================================

document.addEventListener('DOMContentLoaded', function () {
    const mobileTimeElement = document.getElementById('mobile-time');
    const desktopTimeElement = document.getElementById('desktop-time');

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        if (mobileTimeElement) {
            mobileTimeElement.textContent = formattedTime;
        }
        if (desktopTimeElement) {
            desktopTimeElement.textContent = `[ INDIA ${formattedTime} HH ]`;
        }
    }
    updateTime();
    setInterval(updateTime, 1000);
});





// // accordian 



document.addEventListener('DOMContentLoaded', () => {

    // --- ACCORDION LOGIC (Exclusive Open) ---
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const clickedItem = header.parentElement;
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            if (currentlyActiveItem && currentlyActiveItem !== clickedItem) {
                currentlyActiveItem.classList.remove('active');
                const activeHeader = currentlyActiveItem.querySelector('.accordion-header');
                activeHeader.setAttribute('aria-expanded', 'false');
                activeHeader.querySelector('.icon').textContent = '+';
            }
            clickedItem.classList.toggle('active');
            const icon = header.querySelector('.icon');
            const isExpanded = clickedItem.classList.contains('active');
            header.setAttribute('aria-expanded', isExpanded);
            icon.textContent = isExpanded ? '-' : '+';
        });
    });

    // --- SIZE SELECTOR LOGIC ---
    const sizeButtons = document.querySelectorAll('.size-selector button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // --- SIZE CHART MODAL LOGIC ---
    const sizeGuideLink = document.querySelector('.size-guide');
    const sizeChartOverlay = document.querySelector('.size-chart-overlay');
    const closeChartButton = document.querySelector('.close-chart-btn');
    const openModal = () => sizeChartOverlay.classList.add('active');
    const closeModal = () => sizeChartOverlay.classList.remove('active');

    sizeGuideLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeChartButton.addEventListener('click', closeModal);

    sizeChartOverlay.addEventListener('click', (e) => {
        if (e.target === sizeChartOverlay) closeModal();
    });

    // --- NEW: CLOSE SIZE CHART ON SCROLL ---
    window.addEventListener('scroll', () => {
        // This checks if the size chart is currently open
        if (sizeChartOverlay.classList.contains('active')) {
            // If it is, this closes it
            closeModal();
        }
    });
});

// =======================================================
// ============== side price script  =====================
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    const shoppingBag = document.querySelector('.shopping-bag-container');
    const overlay = document.querySelector('.overlay');
   
    const openBtn = document.getElementById('open-bag-link');
    const closeBtn = document.getElementById('close-bag-btn');

    const openBag = () => {
        shoppingBag.classList.add('is-visible');
        overlay.classList.add('is-visible');
    };

    const closeBag = () => {
        shoppingBag.classList.remove('is-visible');
        overlay.classList.remove('is-visible');
    };


    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openBag();
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBag();
    });

    overlay.addEventListener('click', closeBag);
});



// =======================================================
// ============== size chart tab on button ===============
// =======================================================

document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.getAttribute('data-tab');

            tabLinks.forEach(item => {
                item.classList.remove('active');
            });
            link.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            const activeContent = document.getElementById(targetTab);
            activeContent.classList.add('active');
        });
    });
});







