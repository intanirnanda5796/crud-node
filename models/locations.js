const db = require('../config/db').db;
const moment = require('moment');

const locations = db.sequelize.define('locations',{
    'id': {
        primaryKey: true,
        type: db.DataTypes.UUID,
        autoIncrement: false
    },
    'agent_id': db.DataTypes.CHAR,
    'agent_code': db.DataTypes.STRING(191),
    'code': db.DataTypes.STRING(191),
    'region_code': db.DataTypes.STRING(191),
    'address': db.DataTypes.STRING(191),
    'city': db.DataTypes.STRING(191),
    'lat': db.DataTypes.DECIMAL(15,8),
    'lng': db.DataTypes.DECIMAL(15,8),
    'status': db.DataTypes.STRING(50),
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

module.exports = vehicles;
