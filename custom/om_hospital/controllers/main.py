from odoo import http
from odoo.http import request


class HospitalController(http.Controller):

    @http.route('/hospital/patient', auth='user', website=True)
    def hospital_patient(self):
        return "hello world"
        
