let productUnitCost = 0;
let productCurrency = "";
let subtotalUYU = 0;
let subtotalUSD = 0;
let total = 0;
let currentArticlesArray = [];
let productUnitCostUYUArray = [];
let productUnitCostUSDArray = [];
let productUnitCountArray = [];

function showArticles(array) {
    let articlesHTMLtoAppend = '<div class="row">';
    for (let i = 0; i < array.length; i++) {
        let article = array[i];
        articlesHTMLtoAppend += `
            <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                <div class="card shadow-sm">
                    <img src=" ${article.src}" class="p-2 card-img-top">
                    <div class="card-body">
                        <h5> ${article.name} </h5>
                        <small class="text-muted"> Precio unitario: ${article.currency} ${article.unitCost} </small>
                        <form>
                            <div class="row">
                                <div class="col-2 col-lg-6">
                                    <label for="articleCount">Cantidad</label>
                                    <input id="articleCount${i}" class="form-control articleCount" type="number" min="0" value="` + article.count + `">
                                    <button type="submit" disabled style="display: none" aria-hidden="true"></button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `
    }
    articlesHTMLtoAppend += `</div>`
    document.getElementById("articlesHTML").innerHTML = articlesHTMLtoAppend;

    for (let i = 0; i < array.length; i++) {
        document.getElementsByClassName("articleCount")[i].addEventListener("change", function () {
            updateSubtotal(array);
        });
    }
    showSubtotal(subtotalUSD, subtotalUYU);
}

function showSubtotal(subtotalUYU, subtotalUSD) {
    subtotalHTMLtoAppend = `
        <div class ="container">
            <hr>
            <div align="right">
                <h6>Subtotal en UYU ${subtotalUYU} </h6>
                <h6>Subtotal en USD ${subtotalUSD} </h6>
            </div>
            <hr>
        </div>
         `
    document.getElementById("subtotalHTML").innerHTML = subtotalHTMLtoAppend;
}

function updateSubtotal(array) {
    subtotalUSD = 0;
    subtotalUYU = 0;
    for (let i = 0; i < array.length; i++) {
        productUnitCountArray[i] = document.getElementById(`articleCount${i}`).value;
        subtotalUSD += productUnitCountArray[i] * productUnitCostUSDArray[i];
        subtotalUYU += productUnitCountArray[i] * productUnitCostUYUArray[i];
    }
    showSubtotal(subtotalUYU, subtotalUSD);
}

function convertirUSDaUYU(subtotalUSD){
    subtotalUYU = subtotalUYU + subtotalUSD*40;
    subtotalUSD = 0;
    subtotalHTMLtoAppend = `
        <div class ="container">
            <hr>
            <div align="right">
                <h6>Subtotal solo en UYU ${subtotalUYU} </h6>
            </div>
            <hr>
        </div>
         `
    document.getElementById("subtotalEnPesos").innerHTML = subtotalHTMLtoAppend;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_NEW_ELEMENTS).then(function (resultObj) {
        if (resultObj.status === "ok") {
            articles = resultObj.data;
            currentArticlesArray = articles.articles;
            
            for (let i = 0; i < currentArticlesArray.length; i++) {
                let article = currentArticlesArray[i];
                productUnitCountArray[i] = article.count;
                if (article.currency == "USD") {
                    productUnitCostUSDArray[i] = article.unitCost;
                    productUnitCostUYUArray[i] = 0;
                } else {
                    productUnitCostUYUArray[i] = article.unitCost;
                    productUnitCostUSDArray[i] = 0;
                }
            }
            showArticles(currentArticlesArray);
            updateSubtotal(currentArticlesArray);
            
        }
    });
});