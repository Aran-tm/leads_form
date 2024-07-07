/** @odoo-module */

import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks";

const { Component } = owl;

// clase LeadsForm que extiende de la principal Component
export class OwlLeadsForm extends Component {   

    // inicializo servicios y funciones
    setup(){

        // utilizo el servicio orm
        this.orm = useService("orm");
    }

    // visualizar datos
    handleSubmit = async (event) => {

        // previene el comportamiento del envio del formulario
        event.preventDefault();

        const nombre_apellidos = document.getElementById('nombre_apellidos').value;
        const correo_electronico = document.getElementById('correo_electronico').value;
        const telefono_personal = document.getElementById('telefono_personal').value;
        const experiencia = document.getElementById('experiencia').value;
        const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
        const contact_method = document.getElementById('contact_method').value;

        const leadData = {
            name: nombre_apellidos,
            email: correo_electronico,
            phone: telefono_personal,
            experience: experiencia,
            birth_date: fecha_nacimiento,
            contact_method: contact_method
        } 

        // muestro la data por consola
        console.log(leadData)

        await this.orm.create("leads.leads", [leadData]);

        alert("Datos enviados correctamente!");
    }

    // consulta para obtener todos los datos del modelo leads.leads
    async visualizar(){

        console.log("Hola Mundo");

        const datos = await this.orm.read("leads.leads", [], ["name", "email"], {limit: -1});
        console.log(datos);
    }
}

// nombre del template XML
OwlLeadsForm.template = "owl.OwlLeadsForm"

// registrar
registry.category("actions").add("owl.leads_form", OwlLeadsForm)