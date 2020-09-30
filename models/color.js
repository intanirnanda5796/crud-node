const db = require('../config/db').db;
const moment = require('moment');
const localId = require('moment/locale/id');

const colors = db.sequelize.define('colors',{
    'id': {
        primaryKey: true,
        type: db.DataTypes.UUID,
        autoIncrement: false
    },
    'agent_id': db.DataTypes.CHAR,
    'agent_code': db.DataTypes.STRING(191),
    'name': db.DataTypes.STRING(191),
    'code': db.DataTypes.STRING(191),
    'created_at': {
        field: 'created_at',
        type: db.DataTypes.DATE,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD hh:mm:ss');
        }
    }
},{
    timestamps: false
})

module.exports = colors;