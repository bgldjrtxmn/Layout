let linkServices = document.querySelector('.dropdown-btn-service');
let dropDownServices = document.querySelector('.dropdown-services');
let vectorServices = document.querySelector('.vector-services');

linkServices.onclick = function() {
    dropDownServices.classList.toggle('navigation-list__dropdown-active');
    vectorServices.classList.toggle('vector-up');
};

let linkProduct = document.querySelector('.dropdown-btn-product');
let dropDownProduct = document.querySelector('.dropdown-product')
let vectorProduct = document.querySelector('.vector-product');

linkProduct.onclick = function() {
    dropDownProduct.classList.toggle('navigation-list__dropdown-active');
    vectorProduct.classList.toggle('vector-up');
};

let linkResources = document.querySelector('.dropdown-btn-resources');
let dropDownResources = document.querySelector('.dropdown-resources')
let vectorResources = document.querySelector('.vector-resources');

linkResources.onclick = function() {
    dropDownResources.classList.toggle('navigation-list__dropdown-active');
    vectorResources.classList.toggle('vector-up');
};