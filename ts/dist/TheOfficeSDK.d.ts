import { CharacterEntity } from './entity/CharacterEntity';
import { EpisodeEntity } from './entity/EpisodeEntity';
import { SeasonEntity } from './entity/SeasonEntity';
export type * from './TheOfficeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TheOfficeEntityBase } from './TheOfficeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TheOfficeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Character(entopts?: Record<string, any>): CharacterEntity;
    Episode(entopts?: Record<string, any>): EpisodeEntity;
    Season(entopts?: Record<string, any>): SeasonEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TheOfficeSDK;
    tester(testopts?: any, sdkopts?: any): TheOfficeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TheOfficeSDK;
export { stdutil, config, BaseFeature, TheOfficeEntityBase, TheOfficeSDK, SDK, };
