$.get('https://students-api.up.railway.app/movies', (data) => {
    renderCards(data);
});

const cardContainer = document.querySelector("#card-container");

const renderCards = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title} Poster">
            <a href="."><h2>${movie.title}</h2></a>
            <p>Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Duration: ${movie.duration}</p>
            <p>Genre: ${movie.genre.join(", ")}</p>
            <p>Rate: ${movie.rate}</p>
        `;
        cardContainer.appendChild(card);
    });
}