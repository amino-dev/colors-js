let colorName = document.getElementById("input")
let colorSection = document.getElementById("colorSection")


colorName.addEventListener("change", function(){
        let colorText = document.createElement('p')
        let removeText = document.createElement('span')
        colorSection.appendChild(removeText)
        colorSection.appendChild(colorText)
        colorText.innerHTML = "My color is " + colorName.value
        removeText.innerHTML = "h"
        colorText.style.color = colorName.value
        removeText.style.color = colorName.value
        removeText.addEventListener("click", function(){
            colorText.innerHTML = ""
            removeText.innerHTML = ""
            colorName.value = "Enter your color please"
        })
})


/*
colorName.addEventListener("change", function(){
    let colorText = document.createElement('p')
    let span = document.getElementById('span')
    let rm = document.createElement('button')
    span.appendChild(rm)
    colorSection.appendChild(colorText)
    colorText.innerHTML = "My color is " + colorName.value
    colorText.style.color = colorName.value
    removeText.innerHTML = "h"
    
    button.addEventListener("click", function(event){
       let btn = envent.target
       btn.remove()
    })
})*/