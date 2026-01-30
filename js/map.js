export function initMap() {
  const map = L.map("map").setView([52.470, 13.328], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap-Mitwirkende"
  }).addTo(map);

  return map;
}
