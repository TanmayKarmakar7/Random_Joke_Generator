const jokeBtn = document.querySelector("#joke-btn");
const jokeText = document.querySelector("#joke-text");
const copyBtn = document.querySelector("#copy-btn");
const copyBtnImg = document.querySelector("#copy-btn img");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";

function getJoke(){
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeText.innerHTML = item.joke;
        copyBtnImg.src = "copy.png";
    });
}

jokeBtn.addEventListener("click", getJoke);

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(jokeText.innerHTML);
    copyBtnImg.src = "checked.png";
    copyBtn.addEventListener("click", () => {
        alert("Already copied in your clipboard");
    });
});

getJoke();
