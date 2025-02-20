
function adjustHeaderHeight() {
    const header = document.querySelector('.header');
    let viewportHeight = window.innerHeight;

    // Set header height dynamically
    let newHeight = Math.max(100, Math.min(viewportHeight * 0.35, 200));
    header.style.height = newHeight + "px";
}

//Adjust on load and on resize
window.addEventListener("load", adjustHeaderHeight);
window.addEventListener("resize", adjustHeaderHeight);

//for the date ICON
document.addEventListener("DOMContentLoaded", function () {
    function updateDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1; // Months start from 0, so add 1

        console.log(`Current Date: ${year}/${month}`); // Debugging log
        const dateElement = document.getElementById("current-date");

        if (dateElement) {
            dateElement.textContent = `${year}/${month}`;
        } else {
            console.error("Error: #current-date not found in the document.");
        }
    }

    updateDate(); // Run when the page loads
});

console.log("main js is running!")


