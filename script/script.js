
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




// document.addEventListener('DOMContentLoaded', function () {
//     const accordionHeaders = document.querySelectorAll('.dpm-accordion-header');

//     // A flag to prevent multiple animations from running at the same time
//     let isAnimating = false;

//     // --- Reusable Animation Function ---
//     const slide = (element, action) => {
//         // This is a quick fix to prevent animation queue buildup.
//         // A more robust solution might involve aborting previous animations.
//         if (action === 'down' && isAnimating) return;

//         isAnimating = true;

//         const duration = 350; // Animation speed in milliseconds

//         if (action === 'down') {
//             // --- To Open the Accordion ---
//             element.classList.remove('dpm-is-hidden');
//             const height = element.offsetHeight;

//             const animation = element.animate([
//                 { height: '0px', overflow: 'hidden' },
//                 { height: `${height}px`, overflow: 'hidden' }
//             ], {
//                 duration: duration,
//                 easing: 'ease-in-out'
//             });

//             animation.onfinish = () => {
//                 element.style.height = 'auto';
//                 isAnimating = false;
//             };
//         } else {
//             // --- To Close the Accordion ---
//             const height = element.offsetHeight;

//             const animation = element.animate([
//                 { height: `${height}px`, overflow: 'hidden' },
//                 { height: '0px', overflow: 'hidden' }
//             ], {
//                 duration: duration,
//                 easing: 'ease-in-out'
//             });

//             animation.onfinish = () => {
//                 element.classList.add('dpm-is-hidden');
//                 element.style.height = '';
//                 isAnimating = false;
//             };
//         }
//     };

//     accordionHeaders.forEach(clickedHeader => {
//         clickedHeader.addEventListener('click', () => {
//             if (isAnimating && !clickedHeader.nextElementSibling.classList.contains('dpm-is-hidden')) return;

//             const content = clickedHeader.nextElementSibling;
//             const icon = clickedHeader.querySelector('.dpm-accordion-icon');
//             const isOpening = content.classList.contains('dpm-is-hidden');

//             // If you click on an already open item, do nothing until animations are complete
//             if (!isOpening && isAnimating) return;

//             // --- Close all other accordions smoothly ---
//             // This is the logic that was added back in.
//             accordionHeaders.forEach(otherHeader => {
//                 const otherContent = otherHeader.nextElementSibling;
//                 if (otherHeader !== clickedHeader && !otherContent.classList.contains('dpm-is-hidden')) {
//                     slide(otherContent, 'up'); // Animate it closed
//                     otherHeader.querySelector('.dpm-accordion-icon').textContent = '+';
//                 }
//             });

//             // --- Toggle the clicked accordion ---
//             if (isOpening) {
//                 slide(content, 'down'); // Animate it open
//                 icon.textContent = '-';
//             } else {
//                 slide(content, 'up'); // Animate it closed
//                 icon.textContent = '+';
//             }
//         });
//     });
// });



// =======================================================
// ============== footer time script  =====================
// =======================================================

document.addEventListener('DOMContentLoaded', function () {

    // --- Time Update Logic for BOTH views ---
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



// document.addEventListener('DOMContentLoaded', function () {
//     const accordionHeaders = document.querySelectorAll('.accordion-header');

//     accordionHeaders.forEach(header => {
//         header.addEventListener('click', () => {
//             const currentlyActiveItem = document.querySelector('.accordion-item.active');
//             const clickedItem = header.parentElement;

//             // If there is an active item and it's not the one we clicked, close it.
//             if (currentlyActiveItem && currentlyActiveItem !== clickedItem) {
//                 currentlyActiveItem.classList.remove('active');
//                 const activeHeader = currentlyActiveItem.querySelector('.accordion-header');
//                 activeHeader.setAttribute('aria-expanded', 'false');
//                 activeHeader.querySelector('.icon').textContent = '+';
//             }

//             // Toggle the clicked item
//             clickedItem.classList.toggle('active');
//             const icon = header.querySelector('.icon');
//             const isExpanded = clickedItem.classList.contains('active');

//             header.setAttribute('aria-expanded', isExpanded);
//             icon.textContent = isExpanded ? '-' : '+';
//         });
//     });
// });



// =======================================================
// ============== side price script  =====================
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    const shoppingBag = document.querySelector('.shopping-bag-container');
    const overlay = document.querySelector('.overlay');
    // Get the 'BAG[0]' link by its new ID
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

    // Event listener for the 'BAG[0]' link
    openBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the link from navigating
        openBag();
    });

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBag();
    });

    overlay.addEventListener('click', closeBag);
});