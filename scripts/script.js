// //Nuestro primer comentario
// console.log("Hello world");

// //Datos Primitivos
// numero1 = 1; //Tipo number --> "la mayoría de números"
// numero2 = 2;
// console.log(typeof numero1);
// texto1 = "Textico"; //Tipo string
// texto2= " Mas texto";
// console.log(typeof texto1);

// operacionesBasicas= ((((5*8)+5)-2)); //PEMDAS
// console.log(operacionesBasicas);

// uniontextos=texto1+texto2; //Concatenación
// console.log(uniontextos);


// //Funciones con parametros y con retorno
// function sumar(a,b) {
//     return a+b;
// }

// console.log(sumar(1,3));//forma de llamarla


// //Funciones con parametros y sin retorno
// function sumarSR(a,b) {
//     console.log(a+b);
// }

// sumarSR(2,8);//forma de llamarla


// //Funciones sin parametros y con retorno
// function sumaSP() {
//     x = 10+10;
//     return x;
// }

// console.log(sumaSP());//forma de llamarla


// //Funciones sin parametros y sin retorno
// function sumaSN() {
//     console.log(10);
// }

// sumaSN();

// //Ingresar datos externos
// //NombrePersona = prompt("Ingrese el nombre de la persona:");
// //alert("Su nombre es: " + NombrePersona);


let info_campers = [
    {
        id: "001",
        nombre: "Juan",
        apellidos: "Mantila ramirez",
        direccion: "la casa de la casa",
        acudiente: "Madre",
        telefono: "123456789",
        estado: "cursando",
        riesgo: "alto",
    },
    {
        id: "002",
        nombre: "Laura",
        apellidos: "Gomez Torres",
        direccion: "Carrera 8 #12-45",
        acudiente: "Carlos Gomez",
        telefono: "3019876543",
        estado: "graduado",
        riesgo: "bajo",
    },
    {
        id: "003",
        nombre: "Andres",
        apellidos: "Martinez Lopez",
        direccion: "Calle 25 #30-10",
        acudiente: "Patricia Lopez",
        telefono: "3024567890",
        estado: "retirado",
        riesgo: "medio",
    },
    {
        id: "004",
        nombre: "Sofia",
        apellidos: "Hernandez Ruiz",
        direccion: "Carrera 15 #22-18",
        acudiente: "Luis Hernandez",
        telefono: "3035678901",
        estado: "cursando",
        riesgo: "bajo",
    },
    {
        id: "005",
        nombre: "Daniel",
        apellidos: "Castro Mendoza",
        direccion: "Calle 5 #8-33",
        acudiente: "Ana Mendoza",
        telefono: "3046789012",
        estado: "cursando",
        riesgo: "medio",
    },
    {
        id: "006",
        nombre: "Valentina",
        apellidos: "Rojas Silva",
        direccion: "Carrera 20 #40-50",
        acudiente: "Jorge Rojas",
        telefono: "3057890123",
        estado: "graduado",
        riesgo: "bajo",
    },
    {
        id: "007",
        nombre: "Camilo",
        apellidos: "Diaz Morales",
        direccion: "Calle 18 #9-27",
        acudiente: "Sandra Morales",
        telefono: "3068901234",
        estado: "retirado",
        riesgo: "alto",
    },
    {
        id: "008",
        nombre: "Isabella",
        apellidos: "Vargas Perez",
        direccion: "Carrera 3 #14-60",
        acudiente: "Fernando Vargas",
        telefono: "3079012345",
        estado: "cursando",
        riesgo: "medio",
    },
    {
        id: "009",
        nombre: "Mateo",
        apellidos: "Suarez Jimenez",
        direccion: "Calle 12 #7-89",
        acudiente: "Claudia Jimenez",
        telefono: "3080123456",
        estado: "graduado",
        riesgo: "bajo",
    },
    {
        id: "010",
        nombre: "Daniela",
        apellidos: "Ortiz Navarro",
        direccion: "Carrera 11 #16-72",
        acudiente: "Ricardo Ortiz",
        telefono: "3091234567",
        estado: "cursando",
        riesgo: "alto",
    }
];


//AÑADIR LISTAS A OTRAS

// let nuevos_estudiantes = [
//     {
//         id: "011",
//         nombre: "Sebastian",
//         apellidos: "Moreno Alvarez",
//         direccion: "Calle 32 #14-56",
//         acudiente: "Gloria Alvarez",
//         telefono: "3123456789",
//         estado: "cursando",
//         riesgo: "bajo",
//     },
//     {
//         id: "012",
//         nombre: "Natalia",
//         apellidos: "Pineda Castillo",
//         direccion: "Carrera 18 #25-90",
//         acudiente: "Miguel Pineda",
//         telefono: "3134567890",
//         estado: "retirado",
//         riesgo: "medio",
//     }
// ];

// info_campers.push(...nuevos_estudiantes);


let tbody = document.getElementById("info_campers");

info_campers.forEach(camper => {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${camper.id}</td>
        <td>${camper.nombre}</td>
        <td>${camper.apellidos}</td>
        <td>${camper.direccion}</td>
        <td>${camper.acudiente}</td>
        <td>${camper.telefono}</td>
        <td>${camper.estado}</td>
        <td>${camper.riesgo}</td> `;

    tbody.appendChild(fila);
});


let formulario = document.getElementById("Editar");

formulario.addEventListener("submit",function(e) {
    e.preventDefault(); //evita que la pagina se recarge

    let id = document.getElementById("id").value;
    let newname = document.getElementById("nombre").value;
    let newlastname = document.getElementById("apellidos").value;
    let newadress = document.getElementById("direccion").value;
    let newparent = document.getElementById("acudiente").value;
    let newphone = document.getElementById("telefono").value;
    let newstate = document.getElementById("estado").value;
    let newrisk = document.getElementById("riesgo").va;

    let camper = info_campers.find(c => c.id ===id);

    if (camper) {
        if (newname) camper.nombre = newname;
        if (newlastname) camper.apellidos = newlastname;
        if (newadress) camper.direccion = newadress;
        if (newparent) camper.acudiente = newparent;
        if (newphone) camper.telefono = newphone;
        if (newstate) camper.estado = newstate;
        if (newrisk) camper.riesgo = newrisk;

        alert("Camper actualizado correctamente");
        console.log(info_campers);
    } else {
        alert("No se encontró el camper");
    }
});

