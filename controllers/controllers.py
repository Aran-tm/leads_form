# -*- coding: utf-8 -*-
# from odoo import http


# class LeadsForm(http.Controller):
#     @http.route('/leads_form/leads_form', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/leads_form/leads_form/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('leads_form.listing', {
#             'root': '/leads_form/leads_form',
#             'objects': http.request.env['leads_form.leads_form'].search([]),
#         })

#     @http.route('/leads_form/leads_form/objects/<model("leads_form.leads_form"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('leads_form.object', {
#             'object': obj
#         })
