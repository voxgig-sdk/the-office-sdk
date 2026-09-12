import { TheOfficeEntityBase } from '../TheOfficeEntityBase';
import type { TheOfficeSDK } from '../TheOfficeSDK';
import type { Control } from '../types';
import type { Season, SeasonListMatch } from '../TheOfficeTypes';
declare class SeasonEntity extends TheOfficeEntityBase<Season> {
    constructor(client: TheOfficeSDK, entopts: any);
    make(this: SeasonEntity): SeasonEntity;
    list(this: any, reqmatch?: SeasonListMatch, ctrl?: Control): Promise<SeasonEntity[]>;
}
export { SeasonEntity };
