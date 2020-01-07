/* neojax version 2.1.4 Copyright (c) Keimeno
   licensed under Apache-2.0 http://www.apache.org/licenses/LICENSE-2.0 */
import 'unfetch/polyfill';

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
        if (options) {
            this._options = options;
        }
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
    Neojax.prototype.sendRequest = function (url, method, data, options) {
        return __awaiter(this, void 0, Promise, function () {
            var finalUrl, headers, init, response, body, e_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalUrl = url;
                        headers = this._options.headers || {};
                        if (this._options.baseUrl) {
                            finalUrl = this._options.baseUrl + url;
                        }
                        if (options) {
                            if (options.baseUrl) {
                                finalUrl = options.baseUrl + url;
                            }
                            if (options.headers) {
                                headers = __assign(__assign({}, headers), options.headers);
                            }
                        }
                        init = {
                            method: method,
                            headers: __assign({}, headers)
                        };
                        if (data) {
                            init.body = JSON.stringify(data);
                        }
                        return [4 /*yield*/, fetch(finalUrl, init)];
                    case 1:
                        response = _a.sent();
                        headers = this.parseHeadersToNeojaxHeaders(response.headers);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 9]);
                        return [4 /*yield*/, response.json()];
                    case 3:
                        body = _a.sent();
                        return [3 /*break*/, 9];
                    case 4:
                        e_1 = _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.text()];
                    case 6:
                        body = _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        err_1 = _a.sent();
                        body = {};
                        return [3 /*break*/, 8];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, {
                            status: response.status,
                            headers: headers,
                            url: response.url,
                            success: response.ok,
                            message: response.statusText,
                            data: body
                        }];
                }
            });
        });
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
                                case 0: return [4 /*yield*/, this.sendRequest(url, method, data, options)];
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
     * Parses fetch headers into useable NeojaxHeaders
     *
     * @param headers
     */
    Neojax.prototype.parseHeadersToNeojaxHeaders = function (headers) {
        var newHeaders = {};
        headers.forEach(function (value, name) {
            newHeaders[name] = value;
        });
        return newHeaders;
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
        if (data === void 0) { data = null; }
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
        if (data === void 0) { data = null; }
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
        if (data === void 0) { data = null; }
        return this.manageRequest('DELETE', url, data, options);
    };
    Object.defineProperty(Neojax.prototype, "options", {
        /**
         * returns the configured options
         */
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return Neojax;
}());
// export { Neojax };
var index = new Neojax();

export default index;
