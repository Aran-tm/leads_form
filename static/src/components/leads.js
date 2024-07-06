/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlLeadsForm extends Component {

    // funcion que inicia cuando se renderiza el odoo 
    // async willStart() {
        
    // }

    // visualizar datos
    visualizarData() {

        console.log("Data visualizada");
    }

    //manejar formulario
    handleSubmit = (event) => {

        // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        console.log("Datos enviados correctamente");
        alert("Datos enviados correctamente");

        // Datos capturados por el formulario para poder almacenarlos en la base de datos
        // Accede al valor del campo de entrada
        const nombreApellidos = event.target.elements.nombre_apellidos.value;

        alert("Datos enviados correctamente", nombreApellidos);
    }
}

// nombre del template XML
OwlLeadsForm.template = "owl.OwlLeadsForm"

// AppComponent.components = {
//     // Tus componentes secundarios aquí
// };

// registrar
registry.category("actions").add("owl.leads_form", OwlLeadsForm)