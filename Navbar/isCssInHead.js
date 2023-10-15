// Checks if there is necessary css files

const cssFileNameToCheck = ""; // Name of css file to check

const cssLinks = document.querySelectorAll("head link[rel='stylesheet']");
let isCssFileInHead = false;

cssLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === cssFileNameToCheck) {
        isCssFileInHead = true;
    }
});

if (isCssFileInHead) {


} else {

}
