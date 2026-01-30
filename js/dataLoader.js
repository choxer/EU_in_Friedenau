export async function loadGeoJSON(path) {
  const response = await fetch(path);
  return response.json();
}
