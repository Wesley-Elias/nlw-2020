// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false

    // Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada dado limpar
    fields.forEach(function(field) {
        // pegar field do momento e limpa ele
        field.value = ""
    })

    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}