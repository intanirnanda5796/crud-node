const vehicles = require('../models/vehicles');
const response = require('../helpers/response');

module.exports.getAll = async function(req,res) {
    const getVehicleAll = await vehicles.findAll({
        where: {
            agent_code: 'mpm-motor'
        },
        limit: 10,
        order: [
            ['created_at','DESC']
        ]
    });

    return res.json(response.success(getVehicleAll));
}; 
