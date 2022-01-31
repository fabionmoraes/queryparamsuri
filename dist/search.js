"use strict";
// Autor: By Fabio Moraes
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryObjectURI = exports.queryURI = exports.queryParams = void 0;
function urlParams() {
    var url = new URL(window.location);
    var urlSearch = new URLSearchParams(url.search);
    return { urlSearch: urlSearch, url: url };
}
function queryParams(data) {
    var _a;
    var urlParamsQ = urlParams();
    var qr = urlParamsQ.urlSearch;
    var pp = (data === null || data === void 0 ? void 0 : data.page) || 1;
    var ll = (data === null || data === void 0 ? void 0 : data.limit) || 15;
    var objectAssign = {};
    var page = qr.get("page") || String(pp);
    var limit = qr.get("limit") || String(ll);
    (_a = data === null || data === void 0 ? void 0 : data.params) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
        var _a;
        Object.assign(objectAssign, (_a = {}, _a[item] = qr.get(item) || "", _a));
    });
    return {
        searchURI: urlParamsQ.url.search,
        page: page,
        limit: limit,
        query: objectAssign,
    };
}
exports.queryParams = queryParams;
function queryURI(params) {
    var _a, _b;
    var _c;
    var url = urlParams();
    var objectAssing = {};
    var search = ((_c = url.url) === null || _c === void 0 ? void 0 : _c.search) || "";
    if (search) {
        var arrSearch = search.replace("?", "").split("&");
        var verifyIfNotExistsSearch = !!arrSearch.find(function (item) {
            return item.includes(params.name);
        });
        if (!verifyIfNotExistsSearch) {
            Object.assign(objectAssing, (_a = {}, _a[params.name] = params.value, _a));
        }
        arrSearch.forEach(function (item) {
            var _a;
            var structure = item.split("=");
            var name = structure[0];
            var value = params.name === name ? params.value : structure[1];
            Object.assign(objectAssing, (_a = {}, _a[name] = value, _a));
        });
    }
    else {
        Object.assign(objectAssing, (_b = {}, _b[params.name] = params.value, _b));
    }
    var res = Object.keys(objectAssing).map(function (key) {
        return "".concat(key, "=").concat(objectAssing[key]);
    });
    return "?".concat(res.join("&"));
}
exports.queryURI = queryURI;
var queryObjectURI = function (object) {
    var str = "";
    Object.keys(object).forEach(function (key) {
        str += "".concat(key, "=").concat(object[key], "&");
    });
    return "?".concat(str.substring(0, str.length - 1));
};
exports.queryObjectURI = queryObjectURI;
