from odoo import fields, models

class TestModel(models.Model):
    _name = "test_model"
    _description = "Test Model"

    name = fields.Char()
    apellidos = fields.Char()
    telefono_personal = fields.Char()
    correo_electronico = fields.Char()
    dia_contacto = fields.Date()
    via_contacto = fields.Selection([
        ('email', 'Email'),
        ('telefono', 'Teléfono'),
        ('socialMedia', 'Redes Sociales'),
    ])