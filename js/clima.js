// Convierte el nombre de una ciudad en coordenadas usando Open-Meteo Geocoding
async function obtenerCoordenadas(ciudad) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(ciudad)}&count=1&language=es&format=json`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    if (!datos.results || datos.results.length === 0) {
        throw new Error("Ciudad no encontrada");
    }

    const lugar = datos.results[0];
    return {
        nombre: lugar.name,
        pais: lugar.country,
        lat: lugar.latitude,
        lon: lugar.longitude
    };
}