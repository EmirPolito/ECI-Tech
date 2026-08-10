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


        // Diccionario de códigos de clima de la WMO (los usa Open-Meteo)
    const codigosClima = {
        0: "Cielo despejado", 1: "Mayormente despejado", 2: "Parcialmente nublado",
        3: "Nublado", 45: "Niebla", 48: "Niebla con escarcha",
        51: "Llovizna ligera", 53: "Llovizna moderada", 55: "Llovizna intensa",
        61: "Lluvia ligera", 63: "Lluvia moderada", 65: "Lluvia fuerte",
        71: "Nevada ligera", 73: "Nevada moderada", 75: "Nevada fuerte",
        80: "Chubascos ligeros", 81: "Chubascos moderados", 82: "Chubascos violentos",
        95: "Tormenta eléctrica", 96: "Tormenta con granizo", 99: "Tormenta fuerte con granizo"
    };

    // Consulta el clima actual usando latitud y longitud
    async function obtenerClima(lat, lon) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        return {
            temperatura: datos.current.temperature_2m,
            viento: datos.current.wind_speed_10m,
            estado: codigosClima[datos.current.weather_code] || "Desconocido"
        };
    }
}