/** @odoo-module */

import { Component } from '@odoo/owl'; // importacion del state y del Component

// clase LeadsForm que extiende de la principal Component
export class OwlItem extends Component {

    static template = 'owl.OwlItem';
    static props = ['leads', 'onDelete'];

    // inicializo servicios y funciones
    setup() {}

    // funcion para eliminar un lead teniendo en cuenta su id
    async deleteLead() {
        // Elimina registro. Hacerlo asincrono
        await this.props.onDelete(this.props.leads);
    }
}
