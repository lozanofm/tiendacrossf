const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

//USUARIO INGRESA CON CLICK EN EL BOTON "INGRESAR"
let miBoton=document.getElementById("miBoton");
miBoton.addEventListener("click",entrar);
function entrar(){
    window.location="ingreso.html";
}




//USUARIO ENVIA SUS DATOS PERSONALES Y SE ENVIA UN POST A PLACEHOLDER A TRAVES DE CONSOLA
let miBoton22=document.getElementById("miBoton22");
miBoton22.addEventListener("click",enviarDatos);
function enviarDatos(){
    const URLPOST="https://jsonplaceholder.typicode.com/posts";
    const nuevoPost={
        userId:1,
        id:290,
        title:"Probando el formulario",
        body:"datos personales"
    }
    fetch(URLPOST,{
        method:'POST',
        body:JSON.stringify(nuevoPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then( respuesta => respuesta.json())
        .then( datos => {
            //lo que retorna
            console.log("Datos retornados por jsonplaceholder: ");
            console.log(datos);
        })
}