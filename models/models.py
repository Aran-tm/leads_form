# models/models.py
from odoo import models, fields

class TestModel(models.Model):
    _name = 'leads.leads'
    
    nombre_apellidos = fields.Char(string='Nombre y Apellidos')
    correo_electronico = fields.Char(string='Correo Electrónico')
    telefono_personal = fields.Char(string='Teléfono Personal')
    experiencia = fields.Char(string='Años de Experiencia')
    fecha_nacimiento = fields.Date(string='Fecha de Nacimiento')
    via_contacto = fields.Selection([
        ('email', 'Email'),
        ('telefono', 'Teléfono'),
        ('socialMedia', 'Redes Sociales'),
    ], string='Vía de Contacto')
