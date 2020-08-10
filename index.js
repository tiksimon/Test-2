let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

let count = 0
const inputNaruci = document.querySelector('#naruci')
const inputKupac = document.querySelector('#kupac')
const inputDino = document.querySelector('#select-dino')
const inputNapomena = document.querySelector('.textarea-field')
const btnRemove = document.querySelector('#btn-all')
const ItemList = document.querySelector('#item-container')

const addElementToDOM = (id) => {
    const divContainer = document.createElement('div')
    divContainer.className = 'item-container'

        const divInfo = document.createElement('div')
        divInfo.className = 'item-info'

            const divLabels = document.createElement('div')

                const labelKupac = document.createElement('label')
                labelKupac.className = 'kupac'
                labelKupac.textContent = inputKupac + ' '

                const labelDino = document.createElement('label')
                labelDino.className = 'dino'
                labelDino.textContent = inputDino + ' '

                const labelNapomena = document.createElement('label')
                labelNapomena.className = 'napomena'
                labelNapomena.textContent = inputNapomena + ' '
            
            divLabels.append(labelKupac,labelDino,labelNapomena)
            
        divInfo.appendChild(divLabels)

    divContainer.appendChild(divInfo) 

    const divActions = document.createElement('div')
    divActions.className = 'item-actions'

    divContainer.appendChild(divActions)

    ItemList.appendChild(divContainer)
    


}
    
    const divActions = document.createElement('div')
    divActions.className = 'item-actions'

    //     const btnRemove = document.createElement('button')
    //     btnRemove.className = 'item-trashCan'
    //     btnRemove.textContent = 'DELETE' 
    // divActions.appendChild(btnRemove)

    btnRemove.addEventListener('click',(e) => {
        e.target.parentElement.parentElement.remove()
        dinos.splice(dinos.findIndex(el => el.id === id), 1)
   
    })  


const validForm = () => inputKupac.value.trim() !== ''
                        && inputKupac.value.trim().length >= 4
                        && inputDino.value.trim() !== ''
// Уноси за диносауруса и купца не смеју бити празни
// Унос за купца - дужина мора бити најмање 4 слова

inputNaruci.addEventListener('click', () => {
    console.log('kupac' + inputKupac.value)
    console.log(inputDino.value)
    console.log(inputNapomena.value)
    if(!validForm()){
        const greska = document.createElement('div')
        greska.innerHTML = `
        <p> Уноси за диносауруса и купца не смеју бити празни </p>
        <p> Унос за купца - дужина мора бити најмање 4 слова </p> 
        `
    
    ItemList.appendChild(greska)

        setTimeout(() => {
            greska.remove()
        },1200000)

        return

    }
    dinos.push({
        kupac: inputKupac.value,
        dinosaurus: inputDino.value,
        napomena: inputNapomena.value,
        cena: 123
    })
    addElementToDOM(count + dinos.length)
    count++ 
})