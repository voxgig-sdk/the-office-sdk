// Typed models for the TheOffice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  actor: string
  episode?: any[]
  first_appearance: string
  gender: string
  id: number
  job: any[]
  last_appearance: string
  marital: string
  name: string
  workplace: any[]
}

export interface CharacterLoadMatch {
  id: number
}

export interface CharacterListMatch {
  actor?: string
  episode?: any[]
  first_appearance?: string
  gender?: string
  id?: number
  job?: any[]
  last_appearance?: string
  marital?: string
  name?: string
  workplace?: any[]
}

export interface Episode {
  air_date: string
  episode: string
  id: number
  main_character?: any[]
  recurring_character?: any[]
  season_id: number
  series_episode_number: number
  summary: string
  supporting_character?: any[]
  title: string
}

export interface EpisodeListMatch {
  air_date?: string
  episode?: string
  id?: number
  main_character?: any[]
  recurring_character?: any[]
  season_id?: number
  series_episode_number?: number
  summary?: string
  supporting_character?: any[]
  title?: string
}

export interface Season {
  end_date: string
  id: number
  number: number
  start_date: string
}

export interface SeasonListMatch {
  end_date?: string
  id?: number
  number?: number
  start_date?: string
}

