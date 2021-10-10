document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            comment = resultObj.data;

            let commentUserHTML = document.getElementById("commentUser");
            let commentDescriptionHTML = document.getElementById("commentDescription");
            let commentScoreHTML = document.getElementById("commentScore");
            
            commentUserHTML.innerHTML = comment.user;
            commentDescriptionHTML.innerHTML = comment.description;
            commentScoreHTML.innerHTML = comment.score;
        }
    });
});