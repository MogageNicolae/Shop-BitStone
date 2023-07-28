import {initCartList} from "./cart";

export function init() {
    document.addEventListener("DOMContentLoaded", function () {
        fetch("nav.html")
            .then(function (response) {
                return response.text();
            })
            .then(function (navContent) {
                document.getElementById("nav-placeholder").outerHTML = navContent;
                initCartList().then(() => {});
            })
            .catch(function (error) {
                console.log("Error loading navigation: ", error);
            });
    });
}
