import API from './js/servise-api'

const Api = new API.DashFortnite;

console.log(Api);


const refForm = document.querySelector('.search-form')
refForm.addEventListener('submit', handleForm)



async function handleForm(evt) { 
    evt.preventDefault()
    const value = evt.target.elements.search.value
const a = await Api.fetchApi()

    console.log(a);

}