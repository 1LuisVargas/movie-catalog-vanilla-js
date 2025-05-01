// Selecting the card container
const cardContainer = document.querySelector("#card-container");

// Function to render cards
const renderCards = (data) => {
    data.forEach((movie) => {
        // Creating the column div with bootstrap classes for better viewing
        const col = document.createElement("div");
        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");

        // Creating the card with bootstrap classes
        const card = document.createElement("div");
        card.classList.add("card");
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
        // Appending the card to the column div
        col.appendChild(card);
        // Appending the column div to the card container
        cardContainer.appendChild(col);
    });
}

module.exports = renderCards;