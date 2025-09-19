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
