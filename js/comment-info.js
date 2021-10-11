var commentsArray = [];

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            commentsArray = resultObj.data;
            //Muestro los comentarios ordenados
            showComments(commentsArray);
        }
    });
});

function showComments(array){
    showSpinner();
    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let comments = array[i];

        htmlContentToAppend += `
        <a class="list-group-item list-group-item-action">
            <div class="row">
            <p class="card-text"></p>
                    <p class="text-center"> El usuario: `+ comments.user +` dijo: </p>
                    <br>
                    <p class="text-center"> "`+ comments.description +`"</p>
                    <br>
                    <p class="text-center"> Puntuacion: `+ comments.score +`<span class="fa fa-star"></span>" </p> 
            </div>
        </a>
        `
        document.getElementById("comment-list-container").innerHTML = htmlContentToAppend;
    }
    hideSpinner();
}

function submit(){
    let comments = {}
        let estrellas = document.querySelector('input[name=estrellas]:checked').value;
        let user = document.getElementById('usuario').value;
        let description = document.getElementById('descripcion').value;
        let dateTime = document.getElementById('dateTime').value
     

         // Verifico si algo del formulario está vacio
         if(user.trim() === '' || description.trim() === ''){
            alert('Hay campos vacios, verificar!');
            } else {
            comments.user = user;
            comments.description = description;
            comments.dateTime = dateTime;
            comments.score = estrellas;
            comments.estado = true;
            // Guardo en el localStorage
            localStorage.setItem('comments',JSON.stringify(comments));

            commentsArray.push(comments);
           
            showComments(commentsArray);

            limpiar_datos();
            }
}

function limpiar_datos(){
    document.getElementById("usuario").value="";
    document.getElementById("descripcion").value="";
    document.getElementById("dateTime").value="";
    document.querySelector('input[name=estrellas]:checked').value=0;
    
    showProductsList(commentsArray);
}
