let injectorDiv = document.getElementById("injector");
let currentPage = null;

function changePage() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    if (pageID != "")
    {
        injectorDiv.removeChild(currentPage);
        injectorDiv.appendChild(`pages/${pageID}.html`);
        currentPage = `pages/${pageID}.html`;
    }
    else
    {
        injectorDiv.appendChild(`pages/home.html`);
    }
}