# -*- coding: utf-8 -*-
{
    'name': "Leads Form",

    'summary': """
        This is an important module created for opportunities and leads at any enterprises""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Armando Roberto Travieso",
    'website': "https://github.com/Aran-tm/leads_form",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Leads',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',
        'views/views.xml',
        'views/templates.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],   
    # standard options for installation
    'installable': True,
    'application': True,
    'auto_install': False,
}
