/** @odoo-module */

import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks";         // importacion para utilizar ORM 
import { useState, Component } from "@odoo/owl"            // importacion del state y del Component
import { OwlItem } from '@leads_form/components/item';      // importacion de un nuevo componente

// clase LeadsForm que extiende de la principal Component
export class OwlLeadsForm extends Component { 

    // inicializo servicios y funciones
    setup(){

        // utilizo el servicio orm
        this.orm = useService("orm");

        // esto es una variable reactiva
        this.state = useState({leadsData: []});
    }

    // simula el submit en el formulario
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

        // creo los datos en la base de datos ( insert )
        await this.orm.create("leads.leads", [leadData]);

        // esto lo hago para limpiar todos los campos del formulario
        document.getElementById("myForm").reset();

        // esto mer permite mostrar el modal
        // Dispara el evento de click en el elemento invisible para abrir el modal
        var buttonClick = document.getElementById('openModalTrigger');
        if (buttonClick) {
            buttonClick.click();
        }
    }

    // consulta para obtener todos los datos del modelo leads.leads
    async visualizar(){

        // busco todos los id existentes en los registros
        const registrosIds = await this.orm.search("leads.leads", []);

        // consulto la base de datos y obtengo los campos gracias a los IDs
        const data = await Promise.all(
            registrosIds.map(id => this.orm.read
                ("leads.leads", [id], ["id", "name", "experience", "email", "birth_date", "phone", "contact_method"]))
        );

        this.state.leadsData = data.flat();

        // aplano el arreglo para que quede en uno solo
        console.log("Data leads", data.flat());
        console.log("Arreglo Leads", this.leadsData);
    }   

    // funcion para eliminar un lead teniendo en cuenta su id
    async deleteLead(leads) {

        // elimina registro. Hacerlo asincrono
        await this.orm.unlink("leads.leads", [leads.id]);

        // esto actualiza la vista nuevamente con los registros que existan
        await this.visualizar();
    }
}

// nombre del template XML
OwlLeadsForm.template = "owl.OwlLeadsForm"
OwlLeadsForm.components = { OwlItem };

// registrar
registry.category("actions").add("owl.leads_form", OwlLeadsForm)