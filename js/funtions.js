//--------------------------------
//FUNCIONES PARA LA TABLA CLIENTES
//--------------------------------

function consultarCliente(){
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuesta(respuesta.items);
        }
        });
}

function pintarRespuesta(items){
    let myTable = "<table class='bg-gray-100 bg-opacity-75 px-3 pt-5 pb-24rounded-lg overflow-hidden text-center relative'><h2 class='tracking-widest text-3xl title-font font-medium text-gray-400 mb-1'>CLIENTES</h2>";
    for(i=0; i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td> <div class = text-sm title-font font-medium text-gray-400 mb-1><div>"+items[i].id+"</div></td>";
        myTable+="<td> <div class = text-sm title-font font-medium text-gray-400 mb-1><div>"+items[i].name+"</td>";
        myTable+="<td> <div class = text-sm title-font font-medium text-gray-400 mb-1><div>"+items[i].email+"</td>";
        myTable+="<td> <div class = text-sm title-font font-medium text-gray-400 mb-1><div>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarCliente("+items[i].id+")'class=flex mx-auto text-white bg-indigo-500 border-0 py-1 px-5 focus:outline-none hover:bg-indigo-600 rounded text-sm>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            //traerInformacion();
            alert("Se ha guardado")
        }
    });
}

function actualizarCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            //traerInformacion();
            alert("Se ha guardado") 
        }
    });
}

function borrarCliente(idElemento){
    let myData= {
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            //traerInformacion();
            alert("Se Ha Eliminado");
        }
    });
}

//--------------------------------
//FUNCIONES PARA LA TABLA HERRAMIENTAS
//--------------------------------

function consultarHerramientas(){
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuestaH(respuesta.items);
        }
        });
}   

function pintarRespuestaH(items){
let myTable = "<table class='bg-gray-100 bg-opacity-75 px-3 pt-5 pb-24rounded-lg overflow-hidden text-center relative'><h2 class='tracking-widest text-3xl title-font font-medium text-gray-400 mb-1'>HERRAMIENTAS</h2>";
for(i=0; i<items.length; i++){
    myTable+="<tr>";
    myTable+="<td>"+items[i].id+"</td>";
    myTable+="<td>"+items[i].brand+"</td>";
    myTable+="<td>"+items[i].model+"</td>";
    myTable+="<td>"+items[i].category_id+"</td>"
    myTable+="<td>"+items[i].name+"</td>";
    myTable+="<td> <button onclick='borrarHerramienta("+items[i].id+")'>Borrar</button>";
    myTable+="</tr>";
}
myTable+="</table>";
$("#resultado").append(myTable);
}

function guardarHerramienta(){
    let myData={
        id:$("#idHerramienta").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#nameHerramienta").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            //traerInformacion();
            alert("Se ha guardado")
        }
    });
}

function actualizarHerramienta(){
    let myData={
        id:$("#idHerramienta").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#nameHerramienta").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            //traerInformacion();
            alert("Se ha guardado") 
        }
    });
}

function borrarHerramienta(idElemento){
    let myData= {
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/tool/tool",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            //traerInformacion();
            alert("Se Ha Eliminado");
        }
    });
}


//--------------------------------
//FUNCIONES PARA LA TABLA MENSAJES
//--------------------------------
function consultarMensaje(){
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        console.log(respuesta);
        pintarRespuestaM(respuesta.items);
        }
        });
}

function pintarRespuestaM(items){
    let myTable = "<table class='bg-gray-100 bg-opacity-75 px-3 pt-5 pb-24rounded-lg overflow-hidden text-center relative'><h2 class='tracking-widest text-3xl title-font font-medium text-gray-400 mb-1'>MENSAJES</h2>";
    myTable+="<tr>";
    myTable+="<th>| ID |</th>";
    myTable+="<th> MENSAJE </th>";
    myTable+="<th>| ELIMINAR |</th>"; 
    myTable+="</tr>";
    for(i=0; i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";

        myTable+="<td><button onclick='borrarMensaje ("+items[i].id+")' class='flex mx-auto text-white bg-red-500 border-0 py-0 px-0 focus:outline-none hover:bg-red-600 rounded text-sm'>| X |</button></td>";
        
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarMensaje(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val(""),
            $("#messagetext").val("");
            //traerInformacion();
            alert("Se ha guardado")
        }
    });
}

function actualizarMensaje(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messagetext").val("");
            //traerInformacion();
            alert("Se ha guardado") 
        }
    });
}

function borrarMensaje(idElemento){
    let myData= {
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g52f5a305d2c21d-m4vl7ix1cutlw2nh.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            //traerInformacion();
            alert("Se Ha Eliminado");
        }
    });
}