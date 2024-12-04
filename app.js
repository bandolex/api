const apikey = 'ddfd772515160a2a4c140c63c7cd6cc0';
const ts = '1';
const hash = '6a6c3f8215e18018bf2525e8d8198fed';
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`;
const main = document.getElementById("main");

fetch(url)
    .then(response => response.json())
    .then(data => printData(data.data.results))
    .catch(err => console.log('Se ha producido un error: ', err));

const printData = (personajes) => {
    let str = '';
    personajes.forEach(personaje => {
        const name = personaje.name || "Nombre no disponible";
        const img = personaje.thumbnail 
            ? `${personaje.thumbnail.path}.${personaje.thumbnail.extension}` 
            : "https://via.placeholder.com/150";
        const bio = personaje.description || "Descripción no disponible";

        str += `
        <div class="col-md-4 mb-3">
            <div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${bio}</p>
                </div>
            </div>
        </div>`;
    });
    main.innerHTML = str;
};




