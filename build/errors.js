"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCatalog = exports.ErrorTypes = void 0;
var ErrorTypes;
(function (ErrorTypes) {
    ErrorTypes["EntityNotFound"] = "EntityNotFound";
    ErrorTypes["InvalidMongoId"] = "InvalidMongoId";
})(ErrorTypes = exports.ErrorTypes || (exports.ErrorTypes = {}));
exports.errorCatalog = {
    EntityNotFound: {
        message: 'Entity not found',
        httpStatus: 404,
    },
    InvalidMongoId: {
        message: 'Id must be a 24 characters hexadecimal',
        httpStatus: 400,
    },
};
