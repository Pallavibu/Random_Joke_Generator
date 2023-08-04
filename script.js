const button = document.getElementById("button");
const joke = document.getElementById("para");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

let getjoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
        joke.textContent = `${item.joke}`;
    });
}

button.addEventListener("click", getjoke)
getjoke();
