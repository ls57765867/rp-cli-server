'use strict';

const {Controller} = require('egg');

class TestController extends Controller {
    async test(){
        const {ctx} = this
        ctx.body = {
            data:0,
            msg:'来了老弟'
        }
    }
}

module.exports = TestController;
