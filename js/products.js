var productsArray = [];

function showProductsList(array){
    showSpinner();
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let products = array[i];

        htmlContentToAppend += `
        <a href="product-info" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + products.imgSrc + `" alt="` + products.description + `" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ products.name +`</h4>
                        <small class="text-muted">` + "Vendidos: " + products.soldCount + ` artículos</small>
                    </div>
                        <hr></hr>
                        <p class="mb-1">`+ products.description +`</p>
                        <br> 
                        <b> <p class="mb-1">`+ products.currency + " " + products.cost +`</p> </b>
                    </div>
                </div>
            </div>
        </a>
        `
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    }
    hideSpinner();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsList(productsArray);
        }
    });
});

// Funciones de ordenamiento

//Filtro precio
function filtrar(){
    let minimo=parseInt(document.getElementById("min").value);
    let maximo=parseInt(document.getElementById("max").value);
    
    let productsArrayFilt = productsArray.filter((product)=>{
        return product.cost<=maximo && product.cost>=minimo;
    });
 showProductsList(productsArrayFilt);
}

//Limpio filtro
function limpiar(){
    document.getElementById("min").value="";
    document.getElementById("max").value="";
    
    showProductsList(productsArray);
}

//Buscador
function buscar(){
	var resultbuscador = [];
	var inputTxt = document.getElementById("buscador").value.toUpperCase();
	var resultbuscador = productsArray.filter((product)=>{  
		return product.name.toUpperCase().includes(inputTxt);
	});
	showProductsList(resultbuscador);
}

//Ascendente
function ascendente(){
    productsArray.sort((elementoA,elementoB)=>{
        return elementoA.cost-elementoB.cost;
    });
    showProductsList(productsArray);
}

//Descendente
function descendente(){
    productsArray.sort((elementoA,elementoB)=>{
        return elementoB.cost-elementoA.cost;
    });
    showProductsList(productsArray);
};

//Por Relevancia
function porRelevancia(){
    productsArray.sort((elementoA,elementoB)=>{
        return elementoB.soldCount - elementoA.soldCount;
    });
    showProductsList(productsArray);
};
