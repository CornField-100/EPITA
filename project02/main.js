import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min";

const RAPID_KEY = import.meta.env.VITE_RAPID_KEY;
const RAPID_HOST = import.meta.env.VITE_RAPID_HOST;

const fetchAnimeData = async (query, genres, sortBy = 'ranking', sortOrder = 'asc') => {
    document.querySelector(".spinner-border").classList.remove("d-none");
    const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=${query}&genres=${genres}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4cca56c5bbmsh4d07c978776b73fp1efa6cjsn4dcc7facf2e0',  
            'x-rapidapi-host': 'anime-db.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);

        document.querySelector(".spinner-border").classList.add("d-none");

        handleAnimeData(result);
    } catch (error) {
        document.querySelector(".spinner-border").classList.add("d-none");
        console.error(error);
    }
};

const handleAnimeData = (data) => {
    const dynamicDataDiv = document.querySelector(".dynamic_data");
    dynamicDataDiv.innerHTML = '';

    const animeList = data.data || [];

    if (animeList.length === 0) {
        dynamicDataDiv.innerHTML = "<p>No anime found.</p>";
        return;
    }

    animeList.forEach((anime) => {
        const colDiv = document.createElement("div");
        colDiv.classList.add("col");

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "h-100");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = anime.title;  

        const genres = document.createElement("p");
        genres.textContent = `Genres: ${anime.genres.join(", ")}`;  

        const ranking = document.createElement("p");
        ranking.textContent = `Ranking: ${anime.ranking}`;  

        cardBody.appendChild(title);
        cardBody.appendChild(genres);
        cardBody.appendChild(ranking);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);

        dynamicDataDiv.appendChild(colDiv);
    });
};

document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value.trim();  
    const genres = "Fantasy,Drama,Action,Adventure,Erotica,Ecchi";
    fetchAnimeData(query, genres);
});
