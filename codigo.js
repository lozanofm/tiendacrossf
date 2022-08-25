
//APLICAMOS DOM
let titulo=document.getElementById("titulo");//Accedo a titulo a traves de getElementById
titulo.style.font="bold 40px monospace";//cambie la fuente y el tamaño 
titulo.style.textAlign="center"; //Centre el titulo
titulo.innerText="C L E A N - C  R  O  S  S  F  I  T";//aca modificamos el texto de titulo
document.write(Date()); //Agregamos la fecha y hora en la seccion de Ingreso
let parrafos=document.getElementsByTagName("p"); //aca tomamos la etiqueta p(parrafo)
parrafos[0].innerText=new Date().toLocaleString(); //aca le remplazo texto del primer parrafo por fecha y hora



let carrito=[];
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargar los elementos del carro abandonado a la tabla
}
let lista=document.getElementById("milista");

//llamada a renderizar
renderizarProductos();


function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li class="col-sm-3 list-group-item">
            <h3> ID: ${producto.id} </h3>
            <img src=${producto.foto} width="250" height="250">
            <p> Producto: ${producto.nombre}</p>
            <p><strong> $ ${producto.precio} </strong></p>
            <button class='btn btn-danger' id='btn${producto.id}'>Comprar</button>
        </li>`;
    }
    //eventos boton
    productos.forEach(producto =>{
        //evento individual para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
    //alert("Producto: "+productoNuevo.nombre+" agregado al carro!");
    Swal.fire(
        "Producto: "+producto.nombre,
        "Agregado al carrito",
       "success"
    );
    document.getElementById("tablabody").innerHTML+=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
    `;
    localStorage.setItem("carrito",JSON.stringify(carrito));
    //sumar el total de la compra
}

let finalizar=document.getElementById("finalizar");
finalizar.onclick=()=>{
    Swal.fire({
        title: 'Pedido confirmado!',
        text: 'En las próximas horas sale tu envío!',
        imageUrl: '/imagenes/pedido.jpg',
        imageWidth: 170,
        imageHeight: 160,
        imageAlt: 'ok',
    });
}


//usuario ingresa lo que quiere comprar a traves de la funcion reservar
function reservar(){ 

    let articulos=prompt("INGRESA LOS PRODUCTOS QUE DESEAS COMPRAR:\nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO\n(s-para salir)");
    
    let cantidad=0;
    let medida;
    let precio=0;
    
    
    while(articulos!="s" && articulos!="S"){
        switch(articulos){
            case "chaleco":
            case "CHALECO":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                chalec1.mostrarChalec();
                alert("SELECCIONO CHALECO)");
                cantidad=cantidad+1;
                precio=precio+36000;            
                break;
            case "calleras":
            case "CALLERAS":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                callera1.mostrarCalleras();
                alert("SELECCIONO CALLERAS");
                cantidad=cantidad+1;
                precio=precio+7000;
                break;
            case "muñequeras":
            case "MUÑEQUERAS":  
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                munequera1.mostrarMunequera();
                alert("SELECCIONO MUÑEQUERAS");
                cantidad=cantidad+1;
                precio=precio+5000;
                break;
            case "cinturon":
            case "CINTURON":
                medida=prompt("INGRESE EL TALLE: \nA-SMALL\nB-MEDIUM\nC-LARGE\n(s-para salir) ")
                cinturon1.mostrarCinturon();
                alert("SELECCIONO CINTURON");
                cantidad=cantidad+1;
                precio=precio+46000;
                break;
            case "magnesio":
            case "MAGNESIO":
                medida=prompt("INGRESE LOS KG: \nA-1KG\nB-2KG\nC-3 KG\n(s-para salir) ")
                magnesio1.mostrarMagnesio();
                alert("SELECCIONO MAGNESIO");
                cantidad=cantidad+1;
                precio=precio+2000;
                break;
            default:
                alert("NO CORRESPONDE A UN PRODUCTO DE CROSSFIT");
                break;
        }
        articulos=prompt("SI QUIERES SUMAR OTRO PRODUCTO SELLECIONALO: \nCHALECO\nCALLERAS\nMUÑEQUERAS\nCINTURON\nMAGNESIO (s-para salir)");
    }
    alert("CANTIDAD DE PRODUCTOS SELECCIONADOS: "+cantidad);
    alert("Total a pagar $"+precio);
    //MOSTRAMOS LAS REMERAS QUE LA TIENDA TIENE EN PROMOCION
    alert("Antes de retirarse, lo invitamos a mirar nuestras remeras");
    encontrado=prompt("Ingrese la remera que desea buscar");
    
    }


    //OBJETOS
    //MOSTRAMOS EL DETALLE DE LOS PRODUCTOS
   
    class Chalec{
        //constructor de objetos de tipo Chalecos
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Chalec
            mostrarChalec(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const chalec1=new Chalec("Chaleco","Camuflado","S-3","$ 36000");
    const chalec2=new Chalec("Chaleco","Negro","K-2","$ 14800");
    
    
    //Muestra el detalle de Objeto calleras
    class Calleras{
        //constructor de objetos de tipo Calleras
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Calleras
            mostrarCalleras(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const callera1=new Calleras("Calleras","Gris","S-3","$ 7000");
    const callera2=new Calleras("Calleras","Negro","K-2","$ 7000");
    
    //Muestra el detalle de Objeto muñequeras
    class Munequera{
        //constructor de objetos de tipo Muñqueras
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Muñequeras
            mostrarMunequera(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const munequera1=new Munequera("Muñequeras","Roja","S-3","$ 5000");
    const munequera2=new Munequera("Muñequeras","Verde","K-2","$ 5000");
    
    //Muestra el detalle de Objeto Cinturon
    class Cinturon{
        //constructor de objetos de tipo Cinturon
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Cinturon
            mostrarCinturon(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const cinturon1=new Cinturon("Cinturon","Marron","S-3","$ 46000");
    const cinturon2=new Cinturon("Cinturon","Violeta","K-2","$ 46000");
    
    //Muestra el detalle de Objeto Magnesio
    class Magnesio{
        //constructor de objetos de tipo Magnesio
        constructor(tipo,color,modelo, precio){
            this.tipo=tipo;
            this.color=color;
            this.modelo=modelo;
            this.precio=precio;
        }
        //metodo de los objetos de la clase Magnesio
            mostrarMagnesio(){
            alert("Tipo: "+this.tipo+"\nColor: "+this.color+"\nModelo: "+this.modelo+"\nPrecio: "+this.precio);
        }
    }
    
    const magnesio1=new Magnesio("Magnesio","blanco","S-3","$ 2000");
    const magnesio2=new Magnesio("Magnesio","blanco","K-2","$ 2000");
    
    const remeras=[
        {
            codigo:"9345123",
            modelo:"Nobull",
            precio:230
        },
        {
            codigo:"7345124",
            modelo:"Reebok",
            precio:300
        },
        {
            codigo:"3345125",
            modelo:"Nike",
            precio:400
        },
        {
            codigo:"1345126",
            modelo:"Adidas",
            precio:420
        },
    ];
    
    
    // Muestro los modelos de remeras disponibles
    remeras.forEach((remera)=>console.log(remera.modelo));
    
    
    //Usuario busca la remera Adidas
    let encontrado=remeras.find((remera)=>remera.modelo=="Adidas");
    console.log(encontrado);
    
    
    //Si Adidas esta disponible o no se muestra el cartel a continuacion
    if(encontrado != undefined){
        console.log("La remera se encuentra disponible");
        console.log(encontrado);
    }else{
        console.log("No esta disponible!");
    }
    
    
    //filtro las remeras con precio menor a 300
    const oferta=remeras.filter((remera)=>remera.precio<300);
    console.log(oferta);


    