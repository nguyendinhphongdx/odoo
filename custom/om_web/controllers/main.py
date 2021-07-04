from odoo import http
from odoo.http import request


class HospitalController(http.Controller):

    @http.route('/hospital/test', auth='user', website=True)
    def hospital_test(self):
        return "hello world"
        
