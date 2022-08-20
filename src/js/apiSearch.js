const options = {
  headers: {
    Authorization: 'Bearer -7GLSCn4ljSDoyZ7TfUO',
  },
};
export default function search(page = 1) {
  return fetch(
    `https://the-one-api.dev/v2/character?limit=10&page=${page}`,
    options
  ).then(response => response.json());
}
