# # controllers/main.py
# from odoo import http
# from.models.leads import Leads

# class ProspectController(http.Controller):

#     @http.route('/api/prospects', type='json', auth='public')
#     def create_prospect(self, name, email, phone=None, **kw):
#         values = {'name': name, 'email': email, 'phone': phone}
#         prospect = Prospect.create(values)
#         return {'id': prospect.id, 'message': 'Prospect creado exitosamente'}


from odoo import http
from odoo.http import request
import json

class LeadsFormController(http.Controller):

    @http.route('/api/prospects', type='http', auth='public', website=True, csrf=False)
    def add_leads(self, **post):
        return json.dumps({'success': True})