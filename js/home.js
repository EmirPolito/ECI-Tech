// hamburguesa mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
if (btn && menu) {
  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
}

//imagen inclinada scroll
const mockup = document.getElementById("mockup");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mockup.classList.remove("opacity-0", "translate-y-40", "rotate-x-70");
        mockup.classList.add("opacity-100", "translate-y-0", "rotate-x-0");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

observer.observe(mockup);

// precios
function setPlan(plan) {
  const anual = plan === "anual";
  document.querySelectorAll(".periodo").forEach((el) => (el.textContent = anual ? "año" : "mes"));
  btnMensual.className = "px-5 py-2 rounded-full " + (anual ? "text-gray-500" : "bg-white shadow text-gray-900");
  btnAnual.className = "px-5 py-2 rounded-full " + (anual ? "bg-white shadow text-gray-900" : "text-gray-500");
}

// ver más proyectos
function toggleProyectos() {
  const extras = document.querySelectorAll(".proyecto-extra");
  const btn = document.getElementById("btnVerMas");
  const expandido = !extras[0].classList.contains("hidden");
  extras.forEach((card) => card.classList.toggle("hidden"));
  btn.textContent = expandido ? "Ver más proyectos" : "Ver menos";
}