window.onscroll = function() {
    const navTitle = document.querySelector("nav h2");
    const nav = document.querySelector("header");
    const navHeight = window.getComputedStyle(nav).height.replace("px", "") / 1.5;

    if (document.documentElement.scrollTop > navHeight || document.body.scrollTop > navHeight) {
        navTitle.textContent = "Iwan Haryatno";
    } else {
        navTitle.textContent = "Portfolio";
    }
}
