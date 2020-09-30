const CodeMessage = require('./codeMessage').codes;

module.exports.success = function (data,meta = null) {
    let response = {
        code: CodeMessage.http.success.code ? CodeMessage.http.success.code : 200,
        message: CodeMessage.http.success.message ? CodeMessage.http.success.message : 'success',
        data: data
    }

    if (meta)
        response['meta'] = meta

    return response;

};

module.exports.error = function (codeMessage,errors = null, data = null) {
    if(errors && typeof errors == 'object' && typeof errors.message != 'undefined') {
        errors = erros.message;
    }

    if(codeMessage == null || codeMessage == {}) {
        codeMessage = {
            code: CodeMessage.http.internal_server_error.code,
            message: CodeMessage.http.internal_server_error.message
        }
    }

    if (data == null) {
        return {
            code: codeMessage.code,
            message: codeMessage.message,
            data: errors
        };
    } else {
        return {
            code: codeMessage.code,
            message: codeMessage.message,
            data: data
        };
    }
};
