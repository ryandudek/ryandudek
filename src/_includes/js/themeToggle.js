let darkPreferred;
const darkCookie = document.cookie.split(';');

if (darkCookie.filter(function(item) {
    return item.indexOf('darkMode') >= 0
}).length) {
    const darkMode = darkCookie.slice(-1)[0];
    darkPreferred = darkMode.substring(9) === 'true';
}
else {
    darkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const darkModeInput = document.getElementById('darkMode');
const darkModeLabel = document.getElementById('darkLabel');
const lightModeLabel = document.getElementById('lightLabel');
const rootElement = document.querySelector(':root')
document.cookie = 'darkMode=' + darkPreferred;

function setDarkTheme() {
    document.cookie = 'darkMode=true';
    darkModeInput.setAttribute("aria-checked", "true");
    lightModeLabel.setAttribute("aria-hidden", "true");
    darkModeLabel.setAttribute("aria-hidden", "false");

    const darkTheme = {
        '--light-text': '#dadada',
        '--link-color': '#e8858d',
        '--body-bg': '#003839',
        '--body-text': '#fcfcfc',
        '--about-bg': '#003839',
        '--about-text': '#fcfcfc',
        '--about-link': '#e8858d',
        '--header-text': '#e8858d',
        '--resume-bg': '#001a1a',
        '--header-image': "url('/img/icons-light/chemex.svg')",
        '--email-image': "url('/img/icons-light/email.svg')",
        '--phone-image': "url('/img/icons-light/phone.svg')",
        '--web-image': "url('/img/icons-light/web.svg')",
        '--github-image': "url('/img/icons-light/github.svg')",
        '--linkedin-image': "url('/img/icons-light/linkedin.svg')",
        '--twitter-image': "url('/img/icons-light/twitter.svg')"
    }

    for (key in darkTheme) {
        rootElement.style.setProperty(key, darkTheme[key])
    }
}

function setLightTheme() {
    document.cookie = 'darkMode=false';
    darkModeInput.setAttribute("aria-checked", "false");
    lightModeLabel.setAttribute("aria-hidden", "false");
    darkModeLabel.setAttribute("aria-hidden", "true");

    const lightTheme = {
        '--light-text': '#4d4d4d',
        '--link-color': '#00797b',
        '--body-bg': '#fdfdfd',
        '--body-text': '#3c3c3c',
        '--about-bg': '#fdfdfd',
        '--about-text': '#3c3c3c',
        '--about-link': '#00797b',
        '--header-text': '#00797b',
        '--resume-bg': '#fcfcfc',
        '--header-image': "url('/img/icons/chemex.svg')",
        '--email-image': "url('/img/icons/email.svg')",
        '--phone-image': "url('/img/icons/phone.svg')",
        '--web-image': "url('/img/icons/web.svg')",
        '--github-image': "url('/img/icons/github.svg')",
        '--linkedin-image': "url('/img/icons/linkedin.svg')",
        '--twitter-image': "url('/img/icons/twitter.svg')"
    }

    for (key in lightTheme) {
        rootElement.style.setProperty(key, lightTheme[key])
    }
}

darkModeInput.addEventListener("click", toggleTheme, false);

function toggleTheme() {
    if (darkModeInput.getAttribute("aria-checked") === "true") {
        setLightTheme();
    }
    else {
        setDarkTheme();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (darkPreferred === true) {
        setDarkTheme();
    }
    else {
        setLightTheme();
    }
});
