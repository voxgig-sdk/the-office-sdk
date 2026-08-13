-- Typed models for the TheOffice SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field actor string
---@field episodes? table
---@field firstAppearance string
---@field gender string
---@field id number
---@field job table
---@field lastAppearance string
---@field marital string
---@field name string
---@field workplace table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch
---@field actor? string
---@field episodes? table
---@field firstAppearance? string
---@field gender? string
---@field id? number
---@field job? table
---@field lastAppearance? string
---@field marital? string
---@field name? string
---@field workplace? table

---@class Episode
---@field airDate string
---@field episode string
---@field id number
---@field mainCharacters? table
---@field recurringCharacters? table
---@field seasonId number
---@field seriesEpisodeNumber number
---@field summary string
---@field supportingCharacters? table
---@field title string

---@class EpisodeListMatch
---@field airDate? string
---@field episode? string
---@field id? number
---@field mainCharacters? table
---@field recurringCharacters? table
---@field seasonId? number
---@field seriesEpisodeNumber? number
---@field summary? string
---@field supportingCharacters? table
---@field title? string

---@class Season
---@field endDate string
---@field id number
---@field number number
---@field startDate string

---@class SeasonListMatch
---@field endDate? string
---@field id? number
---@field number? number
---@field startDate? string

local M = {}

return M
