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
# @!attribute [rw] episodes
#   @return [Array, nil]
#
# @!attribute [rw] firstAppearance
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
# @!attribute [rw] lastAppearance
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
  :episodes,
  :firstAppearance,
  :gender,
  :id,
  :job,
  :lastAppearance,
  :marital,
  :name,
  :workplace,
  keyword_init: true
)

# Request payload for Character#load.
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] include_episode
#   @return [String, nil]
CharacterLoadMatch = Struct.new(
  :id,
  :include_episode,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] include_episode
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
CharacterListMatch = Struct.new(
  :include_episode,
  :limit,
  :page,
  keyword_init: true
)

# Episode entity data model.
#
# @!attribute [rw] airDate
#   @return [String]
#
# @!attribute [rw] episode
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] mainCharacters
#   @return [Array, nil]
#
# @!attribute [rw] recurringCharacters
#   @return [Array, nil]
#
# @!attribute [rw] seasonId
#   @return [Float]
#
# @!attribute [rw] seriesEpisodeNumber
#   @return [Float]
#
# @!attribute [rw] summary
#   @return [String]
#
# @!attribute [rw] supportingCharacters
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
Episode = Struct.new(
  :airDate,
  :episode,
  :id,
  :mainCharacters,
  :recurringCharacters,
  :seasonId,
  :seriesEpisodeNumber,
  :summary,
  :supportingCharacters,
  :title,
  keyword_init: true
)

# Request payload for Episode#list.
#
# @!attribute [rw] include_character
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Float, nil]
#
# @!attribute [rw] page
#   @return [Float, nil]
#
# @!attribute [rw] season
#   @return [Float, nil]
EpisodeListMatch = Struct.new(
  :include_character,
  :limit,
  :page,
  :season,
  keyword_init: true
)

# Season entity data model.
#
# @!attribute [rw] endDate
#   @return [String]
#
# @!attribute [rw] id
#   @return [Float]
#
# @!attribute [rw] number
#   @return [Float]
#
# @!attribute [rw] startDate
#   @return [String]
Season = Struct.new(
  :endDate,
  :id,
  :number,
  :startDate,
  keyword_init: true
)

# Request payload for Season#list.
#
# @!attribute [rw] endDate
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] number
#   @return [Float, nil]
#
# @!attribute [rw] startDate
#   @return [String, nil]
SeasonListMatch = Struct.new(
  :endDate,
  :id,
  :number,
  :startDate,
  keyword_init: true
)

