# -*- coding: utf-8 -*-

from odoo import models, fields, api


class View(models.Model):
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('map', "Map")])