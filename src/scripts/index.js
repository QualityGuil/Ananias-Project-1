(function () {
    console.log('My Console ==========> My first project');
    getPhotos();
})();

// ()(); --> Essa estrutura faz essa função ser utilizada sozinha

//   {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },

function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos', { // Precisa do https no front-end (rota absoluta)
        method: 'GET', // fetch por padrão vem como 'GET', então não é necessário
        headers: { // configurações gerais no cabeçalho da requisição
            'X-API-KEY': ""
        }
    })
        .then((res) => res.json()) // Converte a response para JSON
        .then((res) => {

            handlePhotos(res);

        });
}

// JSON.stringify
// JSON.parse

function handlePhotos(photos) {
    // console.log('handlePhotos, aqui está a chamada da minha função' + photos);

    const section = document.querySelector('.photos');
    const myFirstPhoto = photos[0];

    let html = '';

    for (const photo of photos) {
        html += `
        <div>
            <h1>${myFirstPhoto.title}</h1>0827
            <img src="${photos[5].thumbnailUrl}">
        </div>
        `;
    }
    section.innerHTML += html
}