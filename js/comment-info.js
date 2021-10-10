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