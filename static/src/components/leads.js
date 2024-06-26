/** @odoo-module **/

import {registry} from  "@web/core/registry";
import {useService} from "@web/core/utils/hooks";

const { Component, useState, onWillStart } = owl

export class LeadsForm extends Component {

    // equivalente a un constructor
    setup() {

        // variable de estado
        this.state = useState({
            title: ''
        })

        // metodo on will start, se ejecuta a arrancar la aplicacion
        onWillStart(async () => {

            console.log('onWillStart');
            this.state.title = 'Leads Form'

            console.log('this.state.title', this.state.title);
        })
    }
}

// para crear una template
LeadsForm.template = 'owl.LeadsForm'

// esto es para registrar la accion
registry.category('actions').add('owl.leads', LeadsForm)