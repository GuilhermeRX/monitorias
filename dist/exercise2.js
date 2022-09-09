"use strict";
var statusCode;
(function (statusCode) {
    statusCode["OK"] = "200";
    statusCode["BADREQUEST"] = "400";
})(statusCode || (statusCode = {}));
console.log(statusCode['OK']);
