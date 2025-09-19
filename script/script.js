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