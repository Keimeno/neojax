/* neojax version 2.1.7 Copyright (c) Keimeno 2020
   licensed under Apache-2.0 http://www.apache.org/licenses/LICENSE-2.0 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('unfetch/polyfill');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * This is the function, that sends out every request.
     *
     * NeojaxOptions priority:
     *  1. NeojaxOptions specified in every single request
     *  2. NeojaxOptions set when creating a new instance through the create method
     *  3. Defaultoptions specified in class
     *
     * @param url
     * @param method
     * @param data
     * @param options
     */
    Util.sendRequest = function (url, method, data, defaultOptions, options) {
        return __awaiter(this, void 0, Promise, function () {
            var finalUrl, headers, init, response, resHeaders, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        finalUrl = Util.retrieveUrl(defaultOptions.baseUrl || '', (options || {}).baseUrl || '', url);
                        headers = Util.retrieveHeaders(defaultOptions.headers || {}, (options || {}).headers || {});
                        init = {
                            method: method,
                            headers: __assign({}, headers)
                        };
                        init.body = JSON.stringify(data);
                        return [4 /*yield*/, fetch(finalUrl, init)];
                    case 1:
                        response = _b.sent();
                        resHeaders = Util.parseHeadersToNeojaxHeaders(response.headers);
                        _a = {
                            status: response.status,
                            headers: resHeaders,
                            url: response.url,
                            success: response.ok,
                            message: response.statusText
                        };
                        return [4 /*yield*/, Util.retrieveData(response)];
                    case 2: return [2 /*return*/, (_a.data = _b.sent(),
                            _a)];
                }
            });
        });
    };
    /**
     * Parses fetch headers into useable NeojaxHeaders
     *
     * @param headers
     */
    Util.parseHeadersToNeojaxHeaders = function (headers) {
        var newHeaders = {};
        try {
            headers.forEach(function (value, name) {
                newHeaders[name] = value;
            });
        }
        catch (e) {
            return {};
        }
        return newHeaders;
    };
    /**
     * retrieves the data from the response object
     *
     * @param response
     */
    Util.retrieveData = function (response) {
        return __awaiter(this, void 0, Promise, function () {
            var e_1, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, response.json()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_1 = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, response.text()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        e_2 = _a.sent();
                        // return an empty string, so that users can check
                        // if it's falsy or not.
                        return [2 /*return*/, ''];
                    case 6: return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * retrieve the requested url.
     * this depends on the options priority
     *
     * @param defaultUrl
     * @param optionsUrl
     * @param url
     */
    Util.retrieveUrl = function (defaultUrl, optionsUrl, url) {
        if (optionsUrl)
            return optionsUrl + url;
        return defaultUrl + url;
    };
    /**
     * returns the headers, that are set for this request
     * this as well depends on the headers priority
     *
     * @param defaultHeaders
     * @param optionsHeaders
     */
    Util.retrieveHeaders = function (defaultHeaders, optionsHeaders) {
        return __assign(__assign({}, defaultHeaders), optionsHeaders);
    };
    return Util;
}());

/**
 * Neojax class
 */
var Neojax = /** @class */ (function () {
    /**
     * Neojax constructor, can take an options parameter
     *
     * @param options
     */
    function Neojax(options) {
        this._options = {};
        this._defaultHeaders = {
            'Content-Type': 'application/json; charset=utf-8'
        };
        var headers = {};
        if (options) {
            this._options = options;
            headers = options.headers || {};
        }
        // Set default headers
        this._options.headers = __assign(__assign({}, this._defaultHeaders), headers);
    }
    /**
     * Create a new Neojax instance out of your existing one.
     *
     * @param options
     */
    Neojax.prototype.create = function (options) {
        return new Neojax(options);
    };
    /**
     * Manages all incoming requests,
     * returns neojaxerror or neojaxresponse as promise
     *
     * @param method
     * @param url
     * @param data
     * @param options
     */
    Neojax.prototype.manageRequest = function (method, url, data, options) {
        if (data === void 0) { data = null; }
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Util.sendRequest(url, method, data, this._options, options)];
                                case 1:
                                    response = _a.sent();
                                    if (response.success) {
                                        resolve(response);
                                    }
                                    else {
                                        reject({
                                            response: response,
                                            message: response.message
                                        });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * sends a get request
     *
     * @param url
     * @param options
     */
    Neojax.prototype.get = function (url, options) {
        return this.manageRequest('GET', url, null, options);
    };
    /**
     * sends a post request
     *
     * @param url
     * @param data
     * @param options
     */
    Neojax.prototype.post = function (url, data, options) {
        return this.manageRequest('POST', url, data, options);
    };
    /**
     * sends a put request
     *
     * @param url
     * @param data
     * @param options
     */
    Neojax.prototype.put = function (url, data, options) {
        return this.manageRequest('PUT', url, data, options);
    };
    /**
     * sends a delete request
     *
     * @param url
     * @param data
     * @param options
     */
    Neojax.prototype.delete = function (url, data, options) {
        return this.manageRequest('DELETE', url, data, options);
    };
    Object.defineProperty(Neojax.prototype, "options", {
        /**
         * returns the configured options
         */
        get: function () {
            return this._options;
        },
        /**
         * makes it possible to change options
         */
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Neojax.prototype, "defaultHeaders", {
        /**
         * returns the default headers
         */
        get: function () {
            return this._defaultHeaders;
        },
        enumerable: true,
        configurable: true
    });
    return Neojax;
}());
var index = new Neojax();

exports.default = index;
