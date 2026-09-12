import { TheOfficeEntityBase } from '../TheOfficeEntityBase';
import type { TheOfficeSDK } from '../TheOfficeSDK';
import type { Control } from '../types';
import type { Episode, EpisodeListMatch } from '../TheOfficeTypes';
declare class EpisodeEntity extends TheOfficeEntityBase<Episode> {
    constructor(client: TheOfficeSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
}
export { EpisodeEntity };
