//  ------------------------------------------------------------
//  Responsive menu
//  - To create multiple menus replicate the script and change 
//    the attribute values, e.g [aria-controls="aside-menu"].
//  ------------------------------------------------------------

document.querySelector("[aria-controls=main-menu]").addEventListener("click", function () {
    var e = document.querySelector("[aria-expanded]");
    "false" == e.getAttribute("aria-expanded") ? e.setAttribute("aria-expanded", "true") : e.setAttribute("aria-expanded", "false");
});
