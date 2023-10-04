// Function to toggle the stylesheet
function toggleStylesheet() {
    const stylesheet = document.getElementById('stylesheet');
    let stylesheetState = true;

    return function () {
        if (stylesheetState) {
            // Switch to an alternative stylesheet
            stylesheet.href = 'style/alternate.css';
        } else {
            // Switch back to the default stylesheet
            stylesheet.href = 'style/main.css';
        }
        // Toggle the state
        stylesheetState = !stylesheetState;
    };
}

// Call the toggleStylesheet function when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton2 = document.getElementById('toggleButton2');
    toggleButton2.addEventListener('click', toggleStylesheet());
});