// Load the Telegram Mini App SDK
let tg = window.Telegram.WebApp;

// Initialize Telegram Mini App
function initTelegramMiniApp() {
    tg.ready();
    console.log("Telegram Mini App initialized.");
}

// Show alert message inside Telegram
function showAlert(message) {
    tg.showAlert(message);
}

// Copy text to clipboard inside Telegram
function copyToClipboard(text) {
    tg.copyTextToClipboard(text);
}

// Get Telegram user data (if available)
function getUserData() {
    return tg.initDataUnsafe?.user || null;
}

// Change header color in Telegram
function setHeaderColor(color) {
    tg.setHeaderColor(color);
}
