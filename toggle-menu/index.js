let toggleNavStatus = false;

const toggleNav = function () {
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarUlSpan = document.querySelectorAll(".nav-sidebar ul span");

    if (toggleNavStatus === false) {
        getSideBarUl.style.visibility = "visible";

        let arrayLength = getSideBarUlSpan.length;

        for (let i = 0; i < arrayLength; i++) {
            getSideBarUlSpan[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSideBarUl.style.visibility = "hidden";

        let arrayLength = getSideBarUlSpan.length;

        for (let i = 0; i < arrayLength; i++) {
            getSideBarUlSpan[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    }
};

let bodyWhole = document.querySelector('body');

let backgroundGray = document.querySelector('.nav-sidebar li:nth-child(1)');

let backgroundRed = document.querySelector('.nav-sidebar li:nth-child(2)');

let backgroundOrange = document.querySelector('.nav-sidebar li:nth-child(3)');

let backgroundPurple = document.querySelector('.nav-sidebar li:nth-child(4)');

let backgroundGreen = document.querySelector('.nav-sidebar li:nth-child(5)');


const changeColorGray = function () {
    bodyWhole.style.background = "#f1f1f1"
};


const eraseRed = () => {

    toggleNav();
    bodyWhole.style.background = "red";

}

backgroundGray.addEventListener("click", changeColorGray); //all method including onlick in the html

backgroundRed.addEventListener("click", eraseRed); // with this method I will have to create a function for each color

backgroundOrange.addEventListener("click", () => { // this is the ideal method. I just put a function and I change the color inside the function
    toggleNav();
    bodyWhole.style.background = "orange";
});

backgroundPurple.addEventListener("click", () => {
    toggleNav();
    bodyWhole.style.background = "purple";
});

backgroundGreen.addEventListener("click", () => {
    toggleNav();
    bodyWhole.style.background = "green";
});
