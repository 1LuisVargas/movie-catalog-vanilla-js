const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
    const titleInput = document.getElementById("title");
    const yearInput = document.getElementById("year");
    const directorInput = document.getElementById("director");
    const durationInput = document.getElementById("duration");
    const genreInput = document.getElementById("genre");
    const rateInput = document.getElementById("rate");
    titleInput.value = "";
    yearInput.value = "";
    directorInput.value = "";
    durationInput.value = "";
    genreInput.value = "";
    rateInput.value = "";
});