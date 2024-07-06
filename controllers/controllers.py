from odoo import http

class MyController(http.Controller):
    @http.route('/tu_ruta_en_el_servidor', type='http', auth='public', methods=['POST'], csrf=False)
    def handle_form_submission(self, **kwargs):
        # Aquí puedes procesar los datos del formulario recibidos en kwargs
        # Por ejemplo, imprimir los datos en la consola para depurar
        print(kwargs)
        return "Datos recibidos correctamente"
