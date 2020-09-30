const db = require('../config/db').db;
const moment = require('moment');
const localId = require('moment/locale/id');

const vehicles = db.sequelize.define('vehicles',{
    'id': {
        primaryKey: true,
        type: db.DataTypes.UUID,
        autoIncrement: false
    },
    'agent_id': db.DataTypes.CHAR,
    'agent_code': db.DataTypes.STRING(191),
    'num_engine': db.DataTypes.STRING(191),
    'num_frame': db.DataTypes.STRING(191),
    'manufacture_year': db.DataTypes.INTEGER,
    'registration_year': db.DataTypes.INTEGER,
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
