
function updateClock() {
    const options = { timeZone: "Asia/Kolkata", hour12: true };
    const now = new Date().toLocaleTimeString("en-GB", options);
    const date = new Date().toLocaleDateString("en-GB", { timeZone: "Asia/Kolkata" });
    document.getElementById("clock").textContent = `[ INDIA ${now} ]`;
}
setInterval(updateClock, 1000);
updateClock();

function updateIndiaTime() {
    let now = new Date();
    let options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    };
    let timeString = now.toLocaleTimeString("en-GB", options);
    const el = document.getElementById("india-time");
    if (el) el.textContent = `{ INDIA ${timeString} HH }`;
}
updateIndiaTime();
setInterval(updateIndiaTime, 1000);

// Cart drawer logic
(function () {
    const body = document.body;
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    const btnClose = document.getElementById('cartClose');
    const btnContinue = document.getElementById('cartContinue');

    function openCart() {
        if (!drawer) return;
        body.classList.add('cart-open');
        drawer.setAttribute('aria-hidden', 'false');
        overlay && overlay.setAttribute('aria-hidden', 'false');
    }

    function closeCart() {
        if (!drawer) return;
        body.classList.remove('cart-open');
        drawer.setAttribute('aria-hidden', 'true');
        overlay && overlay.setAttribute('aria-hidden', 'true');
    }

    // Bind triggers: header bag button and sidebar quick item with text containing BAG
    const headerBagBtn = document.querySelector('.action-bag');
    if (headerBagBtn) headerBagBtn.addEventListener('click', openCart);

    const quickBag = Array.from(document.querySelectorAll('.quick-item'))
        .find(el => /bag\s*\[?\d+\]?/i.test(el.textContent));
    if (quickBag) quickBag.addEventListener('click', openCart);

    // Delegated fallback: open if any quick-item clicked with text containing 'BAG'
    document.addEventListener('click', (e) => {
        const qi = e.target.closest && e.target.closest('.quick-item');
        if (qi && /bag/i.test(qi.textContent)) {
            openCart();
        }
    });









    // Overlay and close actions
    if (overlay) overlay.addEventListener('click', closeCart);
    if (btnClose) btnClose.addEventListener('click', closeCart);
    if (btnContinue) btnContinue.addEventListener('click', closeCart);

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeCart();
    });

    // Quantity buttons (demo only)
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (target.matches('.qty-btn')) {
            const wrap = target.closest('.cart-item-qty');
            if (!wrap) return;
            const valueEl = wrap.querySelector('.qty-value');
            if (!valueEl) return;
            let value = parseInt(valueEl.textContent || '1', 10);
            if (target.dataset.action === 'increment') value++;
            if (target.dataset.action === 'decrement') value = Math.max(1, value - 1);
            valueEl.textContent = String(value);
        }
        if (target.matches('.remove-btn')) {
            const item = target.closest('.cart-item');
            if (item) item.remove();
        }
    });
})();

















document.addEventListener('DOMContentLoaded', () => {

    const accordionItems = document.querySelectorAll('.accordion-item');

    // --- Accordion Logic ---
    // This part has been updated to close other items automatically.
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            const icon = header.querySelector('.icon');
            const isAlreadyOpen = item.classList.contains('active');

            // First, close all accordion items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-content').style.maxHeight = '0';
                otherItem.querySelector('.icon').textContent = '+';
            });

            // If the clicked item was not already open, open it.
            if (!isAlreadyOpen) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '-';
            }
        });
    });

    // --- This part ensures the first item is open on page load ---
    const firstAccordionItem = accordionItems[0];
    if (firstAccordionItem && firstAccordionItem.classList.contains('active')) {
        const firstContent = firstAccordionItem.querySelector('.accordion-content');
        // Set its height explicitly on load
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }


    // --- Size Selector Logic ---
    const sizeButtons = document.querySelectorAll('.size-selector button');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // --- Thumbnail Selector Logic (if you have one) ---
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            galleryItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });
});





// size guid js at here




const sizeGuideLink = document.querySelector('.size-guide');
const sizeGuideOverlay = document.getElementById('sizeGuideOverlay');
const closeSizeGuide = document.getElementById('closeSizeGuide');

// Toggle on link click
sizeGuideLink.addEventListener('click', (e) => {
    e.preventDefault();
    sizeGuideOverlay.classList.toggle('active');
});

// Close button
closeSizeGuide.addEventListener('click', () => {
    sizeGuideOverlay.classList.remove('active');
});

