// Button hover effect
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});


// Form alert
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {
        alert("Message Sent Successfully!");
    });
}


// 🔥 Image Lightbox (NEW ADD)
const images = document.querySelectorAll('.img-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (images.length > 0 && lightbox && lightboxImg) {

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
        });
    });

    // Close on click outside image
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
}

// Close button function
function closeImg() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = "none";
}