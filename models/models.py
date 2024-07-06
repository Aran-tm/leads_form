from odoo import models, fields

class MyLeads(models.Model):
    _name = 'leads.leads'
    _description = 'Leads Form'

    name = fields.Char(string='Nombre Apellidos')
    email = fields.Char(string='Correo Electrónico')
    phone = fields.Char(string='Teléfono Personal')
    experience = fields.Integer(string='Años de Experiencia')
    birth_date = fields.Date(string='Fecha de Nacimiento')
    contact_method = fields.Char(string='Cómo supiste de nosotros')
