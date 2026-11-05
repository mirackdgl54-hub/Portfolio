const viewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");

document.querySelectorAll(".about-card[data-image]").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    viewerImage.src = card.dataset.image;
    viewer.classList.add("open");
  });
});

document.getElementById("imageClose").addEventListener("click", () => {
  viewer.classList.remove("open");
  viewerImage.src = "";
});

viewer.addEventListener("click", (event) => {
  if (event.target === viewer) {
    viewer.classList.remove("open");
    viewerImage.src = "";
  }
});



document.querySelectorAll(".about-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--mouse-x", "-200px");
    card.style.setProperty("--mouse-y", "-200px");
  });
});









const portfolioBackdrop = document.getElementById("portfolioBackdrop");
const portfolioModalTitle = document.getElementById("portfolioModalTitle");
const portfolioClose = document.getElementById("portfolioClose");

document.querySelectorAll(".portfolio-category").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".portfolio-details").forEach((panel) => {
      panel.hidden = panel.id !== button.dataset.open;
    });

    portfolioModalTitle.textContent = button.dataset.title;
    portfolioBackdrop.classList.add("is-open");
    portfolioBackdrop.setAttribute("aria-hidden", "false");
  });
});

function closePortfolio() {
  portfolioBackdrop.classList.remove("is-open");
  portfolioBackdrop.setAttribute("aria-hidden", "true");
}

portfolioBackdrop.addEventListener("click", (event) => {
  if (
    event.target === portfolioBackdrop ||
    event.target.closest(".portfolio-close")
  ) {
    closePortfolio();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePortfolio();
  }
});