let prev = null
let next = null

const pokeList = document.getElementById('pokeList')

const getData = async(url = '') => {
    const response = await fetch(url, {

        method: 'GET'
    })
    return response.json()
}

const populateList = url => {
    const data = getData(url)
    clearList()

    data.then(json => {
        for (const i in json.results) {
            pokeList.innerHTML += `<li>${json.results[i].name}</li>`
            next = json.next
            prev = json.previous
        }
    })
}

const clearList = () => {
    pokeList.innerHTML = ''
}

const populateNext = () => {
    if (next !== null) {
        populateList(next)
    } else {
        return
    }
}

const populatePrev = () => {
    if (prev !== null) {
        populateList(prev)
    } else {
        return
    }
}


populateList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')


document.getElementById('nextBtn').addEventListener('click', populateNext)
document.getElementById('prevBtn').addEventListener('click', populatePrev)