// =========================
// 🔥 BUTTON HOVER EFFECT
// =========================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseout", () => {
        btn.style.transform = "scale(1)";
    });
});


// =========================
// 📩 FORM ALERT
// =========================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {
        alert("Message Sent Successfully!");
    });
}


// =========================
// 🖼️ IMAGE LIGHTBOX
// =========================
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

    // Close on outside click
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
}

// Close button
function closeImg() {
    if (lightbox) {
        lightbox.style.display = "none";
    }
}


// =========================
// 📱 SIDEBAR MENU (NEW)
// =========================
function openMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.add("active");
    }
}

function closeMenu() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
        sidebar.classList.remove("active");
    }
}


// =========================
// ❌ CLOSE MENU WHEN CLICK LINK
// =========================
document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});
