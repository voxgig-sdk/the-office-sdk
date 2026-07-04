-- Typed models for the TheOffice SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Character
---@field actor string
---@field episode? table
---@field first_appearance string
---@field gender string
---@field id number
---@field job table
---@field last_appearance string
---@field marital string
---@field name string
---@field workplace table

---@class CharacterLoadMatch
---@field id number

---@class CharacterListMatch

---@class Episode
---@field air_date string
---@field episode string
---@field id number
---@field main_character? table
---@field recurring_character? table
---@field season_id number
---@field series_episode_number number
---@field summary string
---@field supporting_character? table
---@field title string

---@class EpisodeListMatch

---@class Season
---@field end_date string
---@field id number
---@field number number
---@field start_date string

---@class SeasonListMatch

local M = {}

return M
