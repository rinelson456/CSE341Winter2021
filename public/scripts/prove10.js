const getData = async(url = '') => {
    const response = await fetch(url, {

        method: 'GET'
    })
    return response.json()
}

const postData = async(url = '', data = {}) => {
    const response = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json()
}

const populateList = () => {
    const nameList = document.getElementById('nameList')
    nameList.innerHTML = ''

    const data = getData('/proveAssignments/prove10-server/fetchAll')

    data.then(json => {
        json.avengers.forEach(item => {
            nameList.innerHTML += `<li>${item.name}</li>`
        })
    })
}

const submitName = () => {
    const newName = document.getElementById('newName').value

    const data = postData('/proveAssignments/prove10-server/insertName', {
        newName: newName
    })

    data.then(response => {
        console.log(response)
        if (response.status == 200) {
            populateList()
        } else {
            console.error(status)
        }
    })
}

populateList()