/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component } = owl

export class OwlSalesDashboard extends Component {
    setup(){

    }
}

OwlSalesDashboard.template = "owl.OwlSalesDashboard"

registry.category("actions").add("owl.sales_dashboard", OwlSalesDashboard)