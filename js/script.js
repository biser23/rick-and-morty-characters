const characterList = document.getElementById('character-list');
const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

let paginaActual = 1

function getRickandMortyCharacter(page){
    characterList.innerHTML=""
fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
.then((response) => {
    if(!response.ok){
        throw new Error ('solicitud sin éxtio')
    } return response.json()
})
.then((data) => {
const characters = data.results
characters.forEach(character => {
    let listItem = `
    <li>
    <img src ='${character.image}' alt='${character.name}' />
    <p><span>Nombre: </span>${character.name}</p>
    <p><span>Especie: </span>${character.species}</p>
    </li>
    `
    characterList.innerHTML += listItem
});

})
}
nextPage.addEventListener('click', function(){
    paginaActual ++
    getRickandMortyCharacter(paginaActual)
})
prevPage.addEventListener('click', function(){
    paginaActual --
    getRickandMortyCharacter(paginaActual)
})



getRickandMortyCharacter(paginaActual)