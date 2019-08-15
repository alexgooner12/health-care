function toggleNav() {
    const navbar = document.getElementById("myNav").style;
    if (navbar.width === "" || navbar.width === '0px') {
        navbar.width = '100%';
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";
    }
    else {
        navbar.width = '0';
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
    }      
}
