export function initMap() {
  const map = L.map("map").setView([52.470, 13.328], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap-Mitwirkende"
  }).addTo(map);

  return map;
}


export const euIcon = L.icon({
  iconUrl: "./assets/Flag_of_Europe.svg",
  iconSize: [28, 28],
  iconAnchor: [14, 28],
  popupAnchor: [0, -28]
});


