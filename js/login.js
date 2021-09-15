    function conectar(){
        let dato = {}
        let usuario = document.getElementById('usuario').value;
        let password = document.getElementById('password').value;
    
        // Verifico si algo del formulario está vacio
        if(usuario.trim() === '' || password.trim() === ''){
        alert('Nombre de usuario y/o contraseña vacio/s');
        } else {
        dato.usuario = usuario;
        dato.password = password;
        dato.estado = true;
        // Guardo en el localStorage
        localStorage.setItem('dato',JSON.stringify(dato));
        location.href = "./index.html";
        }
    }

    function desconectar(){
        localStorage.clear();
        location.href = "login.html";
        
    }

    function onSignIn(googleUser) {
        // Useful data for your client-side scripts:
        var profile = googleUser.getBasicProfile();
        /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());*/

        // The ID token you need to pass to your backend:

        let usuario={}

        usuario.nombre=profile.getGivenName();
        usuario.estado="conectado";
        localStorage.setItem('usuario',JSON.stringify(usuario));
        location.href = "./index.html"
        /*var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);*/
      }

      function signOut(){
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function(){

          })
      }

      function onLoad(){
          gapi.load('auth2',function(){
              gapi.auth2.init();
          })
      }
    //Función que se ejecuta una vez que se haya lanzado el evento de
    //que el documento se encuentra cargado, es decir, se encuentran todos los
    //elementos HTML presentes.
    document.addEventListener("DOMContentLoaded", function(e){
    })

    let usuario=JSON.parse(localStorage.getItem("usuario"));

