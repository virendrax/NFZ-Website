// ================= PRELOADER =================
window.addEventListener("load", function () {
  const loader = document.getElementById("preloader");
  if (loader) {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.style.display = "none";
    }, 600);
  }
});

// ================= PARTICLES (INDEX ONLY SAFE) =================
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      size: { value: 3 },
      color: { value: "#ff003c" },
      line_linked: { enable: true, color: "#00ff88" },
      move: { speed: 2 }
    }
  });
}

// ================= REVEAL ANIMATION =================
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));
}

// ================= COUNTER (INDEX ONLY SAFE) =================
const counters = document.querySelectorAll(".counter");
let started = false;

window.addEventListener("scroll", () => {
  const stats = document.getElementById("stats");
  if (stats && !started && stats.getBoundingClientRect().top < window.innerHeight) {
    counters.forEach(counter => {
      const update = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const inc = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(update, 30);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
    started = true;
  }
});

// ================= STORE SYSTEM =================
document.addEventListener("DOMContentLoaded", function () {

  const wallItems = document.querySelectorAll(".wall-item");
  const preview = document.getElementById("wallPreview");
  const modal = document.getElementById("wallModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close-btn");
  const downloadBtn = document.getElementById("downloadBtn");

  // Hover Preview
  if (wallItems.length > 0 && preview) {

    wallItems.forEach(item => {

      item.addEventListener("mouseenter", () => {
        const imgSrc = item.getAttribute("data-img");
        preview.src = imgSrc;
        preview.style.opacity = "1";
      });

      item.addEventListener("mouseleave", () => {
        preview.style.opacity = "0";
      });

      // Click → Modal
      item.addEventListener("click", () => {
        const imgSrc = item.getAttribute("data-img");
        if (modal && modalImg && downloadBtn) {
          modal.style.display = "flex";
          modalImg.src = imgSrc;
          downloadBtn.href = imgSrc;
        }
      });

    });
  }

  // Close Modal
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

});