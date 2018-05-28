# -*- coding: utf-8 -*-

from odoo import models, fields, api


class ActWindowView(models.Model):
    _inherit = 'ir.actions.act_window.view'

    view_mode = fields.Selection(selection_add=[('map', "Map")])