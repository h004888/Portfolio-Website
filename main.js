// -------Thay đổi các trên cùng 1 nav----------
var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-contents")

function openTab(tabname) {
    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

// ------------Bật tắt menu ------------

var sidemenu = document.getElementById('sidemenu')

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = -200 + "px"
}

// --------------Đièn form google sheet -----------
