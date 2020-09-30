'use strict';

// HTTP Status Codes, below are only the one that is used
const http = {
    'success': {
        code: 200,
        message: 'Success'
    },
    'bad_request': {
        code: 400,
        message: "Bad request"
    },
    'method_not_allowed': {
        code: 403,
        message: "Invalid HTTP Method"
    },
    'not_found': {
        code: 404,
        message: "Route not found"
    },
    'internal_server_error': {
        code: 500,
        message: "Internal Server Error"
    },
    'service_unavailable': {
        code: 503,
        message: 'The service is currently unavailable due to maintenance or other unexpected problems. Please try again later.'
    }
}

const codes = Object.freeze({
    http
});

module.exports.codes = codes;
