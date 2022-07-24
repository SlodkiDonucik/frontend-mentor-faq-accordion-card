const ids = new Array(5)
let a = 0 

// "get element" for all ids
for (let i = 0; i < ids.length; i++) {
    ids[i] = document.querySelector('#id' + (i + 1))
}

// function for add event listener add class
const addActiveClass = (a) => {
    for (let i = 0; i < ids.length; i++) {
        ids[i].classList.remove('active')
    }
    ids[a].classList.add('active')
}

// function for add event listener remove class
const removeActiveClass = () =>{
    for (let i = 0; i < ids.length; i++) {
        ids[i].classList.remove('active')
    }
}

//add event listener for all ids
for (let i = 0; i < ids.length; i++) {
    ids[i].addEventListener("click", () => {
        if(ids[i].classList.contains('active')){
            removeActiveClass()
        }else {
            addActiveClass(i)
        }
    })
}
