function conectar(){
    let dato = {}
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
  
    // Verifico si algo del formulario está vacio
    if(usuario.trim() === '' || password.trim() === ''){
      alert('Nombre de usuario y/o contraseña vacio/s');
    }else{
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
    location.href = "./inicio.html";
  }

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});