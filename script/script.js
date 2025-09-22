function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `[ INDIA ${hours}:${minutes}:${seconds} HH ]`;

    const timeElement = document.getElementById("bott3");
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// Run the function every second
setInterval(updateClock, 1000);

// Run it once immediately on load
updateClock();




// side nav clock


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




// accordian 



document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentlyActiveItem = document.querySelector('.accordion-item.active');
            const clickedItem = header.parentElement;

            // If there is an active item and it's not the one we clicked, close it.
            if (currentlyActiveItem && currentlyActiveItem !== clickedItem) {
                currentlyActiveItem.classList.remove('active');
                const activeHeader = currentlyActiveItem.querySelector('.accordion-header');
                activeHeader.setAttribute('aria-expanded', 'false');
                activeHeader.querySelector('.icon').textContent = '+';
            }

            // Toggle the clicked item
            clickedItem.classList.toggle('active');
            const icon = header.querySelector('.icon');
            const isExpanded = clickedItem.classList.contains('active');

            header.setAttribute('aria-expanded', isExpanded);
            icon.textContent = isExpanded ? '-' : '+';
        });
    });
});