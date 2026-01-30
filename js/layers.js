export function createEuLayer(data) {
  return L.geoJSON(data, {
    pointToLayer: (feature, latlng) =>
      L.circleMarker(latlng, {
        radius: 7,
        color: "#003399",
        fillOpacity: 0.8
      }),

    onEachFeature: (feature, layer) => {
      layer.bindPopup(`
        <strong>${feature.properties.name}</strong><br>
        Programm: ${feature.properties.eu_program}<br>
        Betrag: ${feature.properties.amount_eur} €
      `);
    }
  });
}
