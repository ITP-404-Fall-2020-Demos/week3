export function fetchDadJoke() {
  return fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      return responseData.joke;
    });
}
