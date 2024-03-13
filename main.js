let scrollContainer = document.querySelector(".gallary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto"
})
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
});
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
})