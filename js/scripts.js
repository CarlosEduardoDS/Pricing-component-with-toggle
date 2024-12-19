const basicPrice = document.querySelector('#precoBasico');
const professionalPrice = document.querySelector('#precoProfissional');
const masterPrice = document.querySelector('#precoMaster');


document.querySelector('#estados').addEventListener('click', function () {
    const valueBasic = +basicPrice.textContent;
    const valueProfessional = +professionalPrice.textContent;
    const valueMaster = +masterPrice.textContent;
  
    if (valueBasic === 19.99) {
        basicPrice.textContent = 199.99
    } else {
        basicPrice.textContent = 19.99
    }

    if (valueProfessional === 24.99) {
        professionalPrice.textContent = 249.99
    } else {
        professionalPrice.textContent = 24.99
    } 

    if (valueMaster === 39.99) {
        masterPrice.textContent = 399.99
    } else {
        masterPrice.textContent = 39.99
    }

});
  