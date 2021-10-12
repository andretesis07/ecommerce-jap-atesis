//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
            let productCurrencyHTML = document.getElementById("productCurrency");
            let productSoldCountHTML = document.getElementById("productSoldCount");
            let productImagesHTML = document.getElementById("productImages");
            let productRelatedProducts = document.getElementById("relatedProducts")

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productSoldCountHTML.innerHTML = product.soldCount;
            productImagesHTML.innerHTML = product.images;
            productRelatedProducts.innerHTML = product.relatedProducts;

            product.relatedProducts = arrayRelated;
        }
    });
});



function relatedProducts(arrayRelated){
    arrayNuevo = {};
    for (let i = 0; i < array.length; i++){
        indice = arrayRelated[i];
        document.addEventListener("DOMContentLoaded", function (e) {
            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok")
                {
                    arrayAux = resultObj.data;
                    arrayNuevo[i] = arrayAux[indice];
                }
            });
        });
    }
    showRelatedProductsList(arrayNuevo)
}

function showRelatedProductsList(array){
    showSpinner();
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];

        htmlContentToAppend += `
        <a href="products.html" class="list-group-item list-group-item-action">
            <div class="col">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" class="img-thumbnail">
                    <h4 class="mb-1">`+ products.name +`</h4>
                </div>
            </div>
        </a>
        `
        document.getElementById("prod-related-list-container").innerHTML = htmlContentToAppend;
    }
    hideSpinner();
}