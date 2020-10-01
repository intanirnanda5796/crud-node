const db = require('../config/db').db;
const moment = require('moment');

const vehicletypes = db.sequelize.define('vehicle_types',{
    'id': {
        primaryKey: true,
        type: db.DataTypes.UUID,
        autoIncrement: false
    },
    'agent_id': db.DataTypes.CHAR,
    'agent_code': db.DataTypes.STRING(191),
    'code': db.DataTypes.STRING(191),
    'name': db.DataTypes.STRING(191),
    'commercial_name': db.DataTypes.STRING(191),
    'segment': db.DataTypes.STRING(191),
    'series': db.DataTypes.STRING(191),
    'sub_series': db.DataTypes.STRING(191),
    'category': db.DataTypes.STRING(191),
    'assembled_year': db.DataTypes.STRING(10),
    'manufacture_year': db.DataTypes.STRING(10),
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

module.exports = vehicletypes; 
