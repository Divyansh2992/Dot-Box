const scrollToTop = document.createElement("div");
scrollToTop.className = "scroll-to-top";
scrollToTop.id = "scrollToTopBtn";
scrollToTop.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 6.414l7.293 7.293 1.414-1.414L12 3.586 3.293 12.707l1.414 1.414L12 6.414z" fill="#fff"/>
        <path d="M3.293 18.293l1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586 3.293 18.293z" fill="#fff"/>
    </svg>`;

document.body.appendChild(scrollToTop);


scrollToTop.style.position = "fixed";
scrollToTop.style.bottom = "90px";
scrollToTop.style.right = "20px";
scrollToTop.style.left = "20px";
scrollToTop.style.width = "50px";
scrollToTop.style.height = "50px";
scrollToTop.style.backgroundColor = "#000";
scrollToTop.style.borderRadius = "50%";
scrollToTop.style.display = "none"; 
scrollToTop.style.justifyContent = "center";
scrollToTop.style.alignItems = "center";
scrollToTop.style.cursor = "pointer";
scrollToTop.style.zIndex = "1000";


// scrollToTop.addEventListener("mouseover", () => {
//     scrollToTop.style.backgroundColor = "#333";
// });
// scrollToTop.addEventListener("mouseout", () => {
//     scrollToTop.style.backgroundColor = "#000";
// });

scrollToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.onscroll = function () {
    let scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
