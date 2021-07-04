# -*- coding: utf-8 -*-

from odoo import api, fields, models


class HospitalTest(models.Model):
    _name = "hospital.test"
    _description = "Hospital Test"

    name = fields.Char(string='Name', required=True)
    age = fields.Integer(string='Age')
    gender = fields.Selection([
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'other'),
    ], required=True, default='male')
    note = fields.Text(string='Description')

