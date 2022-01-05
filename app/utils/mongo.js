const {mongodbUrl, mongodbName} = require('../../config/db')
const {Schema,model,connect} = require('mongoose')

function mongo() {
    connect(mongodbUrl)
    const rpSchema = new Schema()
    const rp = model('projects',rpSchema)
    return  rp
}

module.exports = mongo()