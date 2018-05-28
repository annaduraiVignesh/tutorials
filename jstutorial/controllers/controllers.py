# -*- coding: utf-8 -*-
import logging
import json
import random

from odoo import http
from odoo.http import request
logger = logging.getLogger(__name__)


class Jstutorial(http.Controller):
    @http.route('/jstutorial/login/', auth='public')
    def index(self, **kw):
        return http.request.render('jstutorial.login', {
            'template': 'template'
        })

    @http.route(['/jstutorial/hello'], type='json', auth='none', csrf=False)
    def helloworld(self, name="none", **post):
        logger.warning(name)
        band_list = ["1974 AD", "Nepathya", "Himalayan Band", "Kandara"]
        name = band_list[random.randint(0, len(band_list)) - 1]
        data = dict([('name', name), ('year', 2018)])
        data['isHello'] = False
        # values = {
        #     'name': name,
        #     'isHello': False,
        # }
        return json.dumps(data)

    # @http.route('/jstutorial/jstutorial/objects/', auth='public')
    # def list(self, **kw):
    #     return http.request.render('jstutorial.listing', {
    #         'root': '/jstutorial/jstutorial',
    #         'objects': http.request.env['jstutorial.jstutorial'].search([]),
    #     })
    #
    # @http.route('/jstutorial/jstutorial/objects/<model("jstutorial.jstutorial"):obj>/', auth='public')
    # def object(self, obj, **kw):
    #     return http.request.render('jstutorial.object', {
    #         'object': obj
    #     })