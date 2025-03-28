const cardContainer = document.querySelector("#card-container");

const renderCards = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3", "col-sm-6");
        card.innerHTML = `
            <img src="${movie.poster}" class="card-img-top" alt="${movie.title} Poster">
            <div class="card-body">
                <a href="#"><h5 class="card-title">${movie.title}</h5></a>
                <p class="card-text">Year: ${movie.year}<br>
                Director: ${movie.director}<br>
                Duration: ${movie.duration}<br>
                Genre: ${movie.genre.join(", ")}<br>
                Rate: ${movie.rate}</p>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

module.exports = renderCards;