let contador=0;
let carrito=[];
let total = 0 ;
function registro(){
    let cancha = document.querySelector('input[name="cancha"]:checked');
    let nombrecancha="";
    let preciohora=Number(cancha.value);
    let cant=document.getElementById("tiempo");
    let nombre=document.getElementById("nombre");
    let numero=document.getElementById("numero");
    let fecha=document.getElementById("fecha");
    let hora=document.getElementById("inicio");
    cant=cant.value;
    fecha=fecha.value;
    hora=hora.value;
    let ini=hora+":00";
    let sum=Number(hora)+Number(cant);
    let fin=sum+":00";

    if(nombre.value==="" || cant==="" || 
       numero.value==="" || fecha.value==="" ||
        hora==="" ){
        alert("ingrese los datos respectivo");
        return;
    }
    if(cancha.id="futbol" && preciohora===120){
        nombrecancha="futbol";
    } else if(cancha.id="basquet" && preciohora===70){
        nombrecancha="basquet";
    } else if(cancha.id="voley" && preciohora===60){
        nombrecancha="voleybol";
    }
    agregarAlCarrito(nombrecancha,preciohora,cant,fecha,ini,fin);
}
function agregarAlCarrito(producto,precio,cantidad,fecha,inicio,fin){
    carrito.push({producto:producto,precio:precio,cantidad:cantidad,fecha:fecha,inicio:inicio,fin:fin});
    total=precio*cantidad;
    actualizarcarrito();
}
function actualizarcarrito(){
    let tablacarrito=document.getElementById("tablacarrito").getElementsByTagName("tbody")[0];
    tablacarrito.innerHTML="";
    carrito.forEach(function(item){

        let fila=tablacarrito.insertRow();
        fila.insertCell(0).innerHTML=item.producto;
        fila.insertCell(1).innerHTML="$"+item.precio;
        fila.insertCell(2).innerHTML=item.cantidad;
        fila.insertCell(3).innerHTML=item.fecha;
        fila.insertCell(4).innerHTML=item.inicio;
        fila.insertCell(5).innerHTML=item.fin;
        let celdaborrar=fila.insertCell(6);
        let eliminar=document.createElement('button')
        eliminar.textContent="eliminar";
        eliminar.className="botton";
        celdaborrar.appendChild(eliminar)
        eliminar.addEventListener("click",borrar)
        function borrar(){
            fila.remove();
        }

    });
    document.getElementById("totalpagar").innerHTML=total;
}
function verificardatos(){
    let nombre=document.getElementById("nombre").value;
    let dirreccion=document.getElementById("direccion").value;
    let targeta=document.getElementById("targeta").value;
    if (nombre==="" || dirreccion==="" || targeta===""){
        alert("por favor , llene todos los datos del formulario");
        return;
    }
    alert("compra realizada con exito total a pagar es "+total);
    carrito=[];
    total=0;
    actualizarcarrito()
    document.getElementById("nombre").value="";
    document.getElementById("direccion").value="";
    document.getElementById("targeta").value="";
}