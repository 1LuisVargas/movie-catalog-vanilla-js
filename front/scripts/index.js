console.log(tempData);

const main = document.querySelector("main");
const cardContainer = document.querySelector("#card-container");

tempData.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title} Poster">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>Director: ${movie.director}</p>
        <p>Duration: ${movie.duration}</p>
        <p>Genre: ${movie.genre.join(", ")}</p>
        <p>Rate: ${movie.rate}</p>
    `;
    cardContainer.appendChild(card);
});