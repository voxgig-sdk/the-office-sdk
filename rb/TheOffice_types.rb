# frozen_string_literal: true

# Typed models for the TheOffice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Character entity data model.
#
# @!attribute [rw] actor
#   @return [String]
#
# @!attribute [rw] episode
#   @return [Array, nil]
#
# @!attribute [rw] first_appearance
#   @return [String]
#
# @!attribute [rw] gender
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] job
#   @return [Array]
#
# @!attribute [rw] last_appearance
#   @return [String]
#
# @!attribute [rw] marital
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] workplace
#   @return [Array]
Character = Struct.new(
  :actor,
  :episode,
  :first_appearance,
  :gender,
  :id,
  :job,
  :last_appearance,
  :marital,
  :name,
  :workplace,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Float]
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Character#list (any subset of Character fields).
#
# @!attribute [rw] actor
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [Array, nil]
#
# @!attribute [rw] first_appearance
#   @return [String, nil]
#
# @!attribute [rw] gender
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] job
#   @return [Array, nil]
#
# @!attribute [rw] last_appearance
#   @return [String, nil]
#
# @!attribute [rw] marital
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] workplace
#   @return [Array, nil]
CharacterListMatch = Struct.new(
  :actor,
  :episode,
  :first_appearance,
  :gender,
  :id,
  :job,
  :last_appearance,
  :marital,
  :name,
  :workplace,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] air_date
#   @return [String]
#
# @!attribute [rw] episode
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] main_character
#   @return [Array, nil]
#
# @!attribute [rw] recurring_character
#   @return [Array, nil]
#
# @!attribute [rw] season_id
#   @return [Float]
#
# @!attribute [rw] series_episode_number
#   @return [Float]
#
# @!attribute [rw] summary
#   @return [String]
#
# @!attribute [rw] supporting_character
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
Episode = Struct.new(
  :air_date,
  :episode,
  :id,
  :main_character,
  :recurring_character,
  :season_id,
  :series_episode_number,
  :summary,
  :supporting_character,
  :title,
  keyword_init: true
)

# Match filter for Episode#list (any subset of Episode fields).
#
# @!attribute [rw] air_date
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] main_character
#   @return [Array, nil]
#
# @!attribute [rw] recurring_character
#   @return [Array, nil]
#
# @!attribute [rw] season_id
#   @return [Float, nil]
#
# @!attribute [rw] series_episode_number
#   @return [Float, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] supporting_character
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
EpisodeListMatch = Struct.new(
  :air_date,
  :episode,
  :id,
  :main_character,
  :recurring_character,
  :season_id,
  :series_episode_number,
  :summary,
  :supporting_character,
  :title,
  keyword_init: true
)

# Season entity data model.
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] start_date
#   @return [String]
Season = Struct.new(
  :end_date,
  :id,
  :number,
  :start_date,
  keyword_init: true
)

# Match filter for Season#list (any subset of Season fields).
#
# @!attribute [rw] end_date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] start_date
#   @return [String, nil]
SeasonListMatch = Struct.new(
  :end_date,
  :id,
  :number,
  :start_date,
  keyword_init: true
)

