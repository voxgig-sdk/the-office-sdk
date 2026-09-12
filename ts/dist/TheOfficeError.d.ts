import { Context } from './Context';
declare class TheOfficeError extends Error {
    isTheOfficeError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TheOfficeError };
