/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlLeadsForm extends Component {

    // funcion que inicia cuando se renderiza el odoo 
    // async willStart() {
        
    // }

    /* 
    
    <input t-ref="miCampoEntrada" type="text" placeholder="Escribe algo...">

    class MiComponente extends Component {
        miMetodo() {
            const valorDelCampo = this.$refs.miCampoEntrada.value;
            console.log(valorDelCampo); // Imprime el valor del campo de entrada
        }
    }

    */

    // visualizar datos
    visualizarData = (event) => {

        console.log("Data visualizada");

        const nombre_apellidos = document.getElementById('nombre_apellidos').value;
        const correo_electronico = document.getElementById('correo_electronico').value;
        const telefono_personal = document.getElementById('telefono_personal').value;
        const experiencia = document.getElementById('experiencia').value;
        const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
        const via_contacto = document.getElementById('via_contacto').value;

        console.log("Datos enviados correctamente",
             nombre_apellidos, correo_electronico, telefono_personal, experiencia, fecha_nacimiento, via_contacto);
    }

    //manejar formulario
    handleSubmit = (event) => {

        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Datos capturados por el formulario para poder almacenarlos en la base de datos
        const nombre_apellidos = document.getElementById('nombre_apellidos').value;
        const correo_electronico = document.getElementById('correo_electronico').value;
        const telefono_personal = document.getElementById('telefono_personal').value;
        const experiencia = document.getElementById('experiencia').value;
        const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
        const via_contacto = document.getElementById('via_contacto').value;

        console.log("Datos enviados correctamente",
             nombre_apellidos, correo_electronico, telefono_personal, experiencia, fecha_nacimiento, via_contacto);
        
    }
}

// nombre del template XML
OwlLeadsForm.template = "owl.OwlLeadsForm"

// AppComponent.components = {
//     // Tus componentes secundarios aquí
// };

// registrar
registry.category("actions").add("owl.leads_form", OwlLeadsForm)