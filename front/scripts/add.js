// Clear button
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

// Add movie form
const addForm = document.getElementById("add-form");

addForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get form data
    const titleInput = document.getElementById("title");
    const yearInput = document.getElementById("year");
    const directorInput = document.getElementById("director");
    const durationInput = document.getElementById("duration");
    const genreInputs = document.querySelectorAll('input[name="genre"]:checked');
    const genres = Array.from(genreInputs).map(input => input.value);    
    const rateInput = document.getElementById("rate");
    const posterInput = document.getElementById("poster");

    // Create movie object
    const movie = {
        title: titleInput.value,
        year: yearInput.value,
        director: directorInput.value,
        duration: durationInput.value,
        genre: genres,
        rate: rateInput.value,
        poster: posterInput.value,
    };

    // Send POST request
    try {
        const response = await fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
        });

        // Handle response
        if (response.ok) {
            const data = await response.json();
            console.log("Movie added:", data);
            titleInput.value = "";
            yearInput.value = "";
            directorInput.value = "";
            durationInput.value = "";
            genreInputs.value = "";
            rateInput.value = "";
            posterInput.value = "";
        } else {
            console.error("Error adding movie:", response.statusText);
        }
    } catch (error) {
        console.error("Error adding movie:", error);
    }
});