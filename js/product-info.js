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

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            showRelatedProductsList(productsArray);
        }
    });
});

function showRelatedProductsList(array){
    let relatedProducts = "";
    for(let i = 0; i < product.relatedProducts.length; i++){
        let products = product.relatedProducts[i];

        relatedProducts += `
        <div class="card-group">
                    <img class="card-img-top" style="width: 18rem;" src="`+ array[products].imgSrc + `"alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"> `+ array[products].name +`</h5>
                        <p class="card-text">`+ array[products].currency +` `+ array[products].cost +`</p>
                        <p class="card-text">`+ array[products].description +`</p>
                        <a href="products.html" class="btn btn-primary">Màs informaciòn</a>
                    </div>
        </div>
        `
        document.getElementById("prod-related-list-container").innerHTML = relatedProducts;
    }
    hideSpinner();
}