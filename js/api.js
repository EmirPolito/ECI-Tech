// api.js
// Integración con Google Maps Embed API para mostrar la ubicación de ECI Tech.
// No requiere API key: se usa el modo de consulta pública (?q=...&output=embed).

(function () {
  const MAP_QUERY = "Universidad Tecnológica del Sureste de Veracruz, Nanchital de Lázaro Cárdenas del Río, Veracruz";
  const MAP_BASE_URL = "https://www.google.com/maps";

  function buildMapUrl(query) {
    const params = new URLSearchParams({
      q: query,
      output: "embed"
    });
    return `${MAP_BASE_URL}?${params.toString()}`;
  }

  function renderMap() {
    const container = document.getElementById("map-container");
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = buildMapUrl(MAP_QUERY);
    iframe.width = "100%";
    iframe.height = "400";
    iframe.style.border = "0";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("title", "Ubicación de ECI Tech en el mapa");

    container.appendChild(iframe);
  }

  document.addEventListener("DOMContentLoaded", renderMap);
})();
