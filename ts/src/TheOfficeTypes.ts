// Typed models for the TheOffice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Character {
  actor: string
  episodes?: any[]
  firstAppearance: string
  gender: string
  id: number
  job: any[]
  lastAppearance: string
  marital: string
  name: string
  workplace: any[]
}

export interface CharacterLoadMatch {
  id: number
  include_episode?: string
}

export interface CharacterListMatch {
  include_episode?: string
  limit?: number
  page?: number
}

export interface Episode {
  airDate: string
  episode: string
  id: number
  mainCharacters?: any[]
  recurringCharacters?: any[]
  seasonId: number
  seriesEpisodeNumber: number
  summary: string
  supportingCharacters?: any[]
  title: string
}

export interface EpisodeListMatch {
  include_character?: string
  limit?: number
  page?: number
  season?: number
}

export interface Season {
  endDate: string
  id: number
  number: number
  startDate: string
}

export interface SeasonListMatch {
  endDate?: string
  id?: number
  number?: number
  startDate?: string
}

