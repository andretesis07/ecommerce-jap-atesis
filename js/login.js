function conectar(){
    let dato = {}
    let usuario = document.getElementById('usuario').value;
    let email = document.getElementById('email').value;
  
    // Verifico si los campos están vacios
    if(usuario.trim() === '' || email.trim() === ''){
      alert('Usuario o Email vacio/s');
    }else{
      dato.usuario = usuario;
      dato.email = email;
      dato.estado = true;
      // Guardo el objeto en el localStorage
      localStorage.setItem('dato',JSON.stringify(dato));
      location.href = "./index.html";
    }
  }
  
  function desconectar(){
    localStorage.clear();
    location.href = "./inicio.html";
  }
  

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});