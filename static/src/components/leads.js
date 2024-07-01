/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlLeadsForm extends Component {
    setup(){
    }
}

OwlLeadsForm.template = "owl.OwlLeadsForm"

registry.category("actions").add("owl.leads_form", OwlLeadsForm)