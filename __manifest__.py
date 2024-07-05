# -*- coding: utf-8 -*-
{
    'name': "Leads Form",

    'summary': """
        This is an important module created for opportunities and leads at any enterprises""",

    'description': """
        Module created for opportunities and leads at any enterprises
    """,

    'author': "Armando Roberto Travieso",
    'website': "https://github.com/Aran-tm/leads_form",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/16.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Leads/Leads',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web',],

    # always loaded
    'data': [
        'views/leads.xml',   
    ],
    # standard options for installation
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'leads_form/static/src/components/**/*.js',
            'leads_form/static/src/components/**/*.xml',
            'leads_form/static/src/components/**/*.css',
        ],
    },
    'icon': 'leads_form/static/description/leads.png',
}