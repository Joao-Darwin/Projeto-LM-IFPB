const nomePokemon = document.querySelector('.pokemon__name')
const numeroPokemon = document.querySelector('.pokemon__number')
const imgPokemon = document.querySelector('.pokemon__image')

const formPokemon = document.querySelector('.form')
const valueSearch = document.querySelector('.input__search')

const buttonNext = document.querySelector('.btn-next')
const buttonPrev = document.querySelector('.btn-prev')

let idPokemon = 1;

//async defini que uma função é uma função assícrona
const fetchPokemon = async (pokemon) => {

    // awiat para esperar a resposta da api concluir
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIresponse.status == 200) {
        const data = APIresponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {

    nomePokemon.innerHTML = 'Carregando...'
    numeroPokemon.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if (data) {
        nomePokemon.innerHTML = data.name;
        numeroPokemon.innerHTML = data.id;
        idPokemon = data.id
        imgPokemon.style.display = 'initial'
        imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        valueSearch.value = '';
    } else {
        nomePokemon.innerHTML = 'Não encontrado';
        numeroPokemon.innerHTML = '';
        imgPokemon.style.display = 'none'
    }
}

formPokemon.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(valueSearch.value.toLowerCase());
})

buttonNext.addEventListener('click', (event) => {
    renderPokemon(idPokemon + 1);
})

buttonPrev.addEventListener('click', (event) => {
    if (idPokemon > 1) {
        renderPokemon(idPokemon - 1);
    }
})

renderPokemon(idPokemon)