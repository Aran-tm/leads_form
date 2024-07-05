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

    // manejar formulario
    // handleSubmit = (event) => {

    //     // Prevenir el comportamiento predeterminado del formulario
    //     event.preventDefault();

    //     console.log("Datos enviados correctamente");
    //     alert("Datos enviados correctamente");

    //     // Crear un objeto FormData a partir del formulario
    //     const formData = new FormData(event.target);

    //     fetch('/mi_endpoint', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Respuesta:', data);
    //         // Aquí puedes manejar la respuesta del servidor
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //         // Manejar errores
    //     });
    // }
}

// nombre del template XML
OwlLeadsForm.template = "owl.OwlLeadsForm"

// AppComponent.components = {
//     // Tus componentes secundarios aquí
// };

// registrar
registry.category("actions").add("owl.leads_form", OwlLeadsForm)