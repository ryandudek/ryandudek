const darkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
const darkModeInput = document.getElementById('darkMode');
const rootElement = document.querySelector(':root')

function setDarkTheme() {
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

function setInputDark() {
    darkModeInput.setAttribute("aria-checked", "true");
}

darkModeInput.addEventListener("click", toggleTheme, false);

function toggleTheme() {
    if (darkModeInput.getAttribute("aria-checked") === "true") {
        darkModeInput.setAttribute("aria-checked", "false");
        setLightTheme();
    }
    else {
        setInputDark();
        setDarkTheme();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (darkPreferred) {
        setInputDark();
    }
});
