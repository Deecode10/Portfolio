//toggle
document.getElementById("mode-toggle")?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}


//gallerry
if (document.getElementById("project-gallery")) {
  const gallery = document.getElementById("project-gallery");
  const renderProjects = (category = "all") => {
    gallery.innerHTML = "";
    let filtered = category === "all" ? projects : projects.filter(p => p.category === category);
    filtered.forEach(p => {
      let div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<img src="${p.image}" alt="${p.title}" /><h3>${p.title}</h3>`;
      gallery.appendChild(div);
    });
  };

  renderProjects();

  document.querySelectorAll(".filters button").forEach(btn =>
    btn.addEventListener("click", () => renderProjects(btn.dataset.category))
  );
}




//form
const form = document.getElementById("contact-form");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const msgBox = document.getElementById("form-msg");

  if (!name || !email || !message) {
    msgBox.textContent = "All fields are required!";
    msgBox.style.color = "red";
  } else {
    msgBox.textContent = "Message sent successfully!";
    msgBox.style.color = "purple";
    form.reset();
  }
});

//menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
