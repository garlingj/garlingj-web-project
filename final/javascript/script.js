
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const contrastBtn = document.getElementById("contrastBtn");

if (contrastBtn) {
  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", () => {

    const filter = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

      const text = card.textContent.toLowerCase();

      if (text.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

}

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();

  });

}

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }

  });

});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});
// MOBILE MENU

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const contrastBtn = document.getElementById("contrastBtn");

if (contrastBtn) {
  contrastBtn.addEventListener("click", () => {
    document.body.classList.toggle("high-contrast");
  });
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener("keyup", () => {

    const filter = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

      const text = card.textContent.toLowerCase();

      if (text.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });

}

const form = document.getElementById("contactForm");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");
    form.reset();

  });

}

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }

  });

});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});