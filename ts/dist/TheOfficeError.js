"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheOfficeError = void 0;
class TheOfficeError extends Error {
    isTheOfficeError = true;
    sdk = 'TheOffice';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.TheOfficeError = TheOfficeError;
//# sourceMappingURL=TheOfficeError.js.map