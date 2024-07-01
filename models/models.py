# models/models.py
from odoo import models, fields

class TestModel(models.Model):
    _name = 'leads.leads'
    
    nombre = fields.Char(string='Nombre')
    apellidos = fields.Char(string='Apellidos')
    telefono_personal = fields.Char(string='Teléfono Personal')
    correo_electronico = fields.Char(string='Correo Electrónico')
    dia_contacto = fields.Date(string='Día de Contacto')
    via_contacto = fields.Selection([
        ('email', 'Email'),
        ('telefono', 'Teléfono'),
        ('socialMedia', 'Redes Sociales'),
    ], string='Vía de Contacto')
