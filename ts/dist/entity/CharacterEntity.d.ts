import { TheOfficeEntityBase } from '../TheOfficeEntityBase';
import type { TheOfficeSDK } from '../TheOfficeSDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../TheOfficeTypes';
declare class CharacterEntity extends TheOfficeEntityBase<Character> {
    constructor(client: TheOfficeSDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
