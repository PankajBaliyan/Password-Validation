var lockIcon = document.querySelector(".fa-lock");
var inner = document.querySelector(".inner");
var password = document.querySelector("#myPass");
var state = false;
let text, validIcons, invalidIcons;

/**
 * TOGGLE()
 * change input type
 * change color theme
 * change state
 */
function toggle() {
    myFunction();
    if (state) {
        function displayPass() {
            document.getElementById("myPass").setAttribute("type", "password");
        }
        setTimeout(displayPass, 80);

        lockIcon.classList.remove("color-change");
        inner.classList.remove("inner-hover");
        state = false;
    }
    else {
        function displayText() {
            document.getElementById("myPass").setAttribute("type", "text");
        }
        setTimeout(displayText, 80);

        lockIcon.classList.add("color-change");
        inner.classList.add("inner-hover");
        state = true;
    }
}

// used to toggle eye
function myFunction() {
    var eye = document.querySelector(".eye-close");
    imgSrc = document.getElementById("img1").src;
    if (imgSrc.indexOf("eye-close") != -1) {
        eye.classList.add('eye-open');
        document.getElementById("img1").src = "https://i.postimg.cc/3JHFrZ3v/eye-open.png";
    } else {
        eye.classList.remove('eye-open');
        document.getElementById("img1").src = "https://i.postimg.cc/HWMtCN1m/eye-close.png";
    }
}

// used to enable checking validation
function valid(item, validIcon, invalidIcon) {
    text = document.querySelector(`#${item}`);
    text.style.opacity = "1";
    validIcons = document.querySelector(`#${item} .${validIcon}`);
    validIcons.style.opacity = '1';
    invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    invalidIcons.style.opacity = "0";
}

// used to disable checking validation
function invalid(item, validIcon, invalidIcon) {
    text = document.querySelector(`#${item}`);
    text.style.opacity = "0.5";
    validIcons = document.querySelector(`#${item} .${validIcon}`);
    validIcons.style.opacity = '0';
    invalidIcons = document.querySelector(`#${item} .${invalidIcon}`);
    invalidIcons.style.opacity = "1";
}

// check input value & check validation for input data
function textChange() {
    if (password.value.match(/[A-Z]/) != null)
        valid('capital', 'fa-check', 'fa-times');
    else
        invalid('capital', 'fa-check', 'fa-times');

    if (password.value.match(/[0-9]/) != null)
        valid('number', 'fa-check', 'fa-times');
    else
        invalid('number', 'fa-check', 'fa-times');

    if (password.value.match(/[!@#$%^&*]/) != null)
        valid('special-char', 'fa-check', 'fa-times');
    else
        invalid('special-char', 'fa-check', 'fa-times');

    if (password.value.length >= 8)
        valid('more-than-8', 'fa-check', 'fa-times');
    else
        invalid('more-than-8', 'fa-check', 'fa-times');
}