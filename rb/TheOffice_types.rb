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
CharacterLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Character#list.
#
# @!attribute [rw] actor
#   @return [String, nil]
#
# @!attribute [rw] episodes
#   @return [Array, nil]
#
# @!attribute [rw] firstAppearance
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
# @!attribute [rw] lastAppearance
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
# @!attribute [rw] airDate
#   @return [String, nil]
#
# @!attribute [rw] episode
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Float, nil]
#
# @!attribute [rw] mainCharacters
#   @return [Array, nil]
#
# @!attribute [rw] recurringCharacters
#   @return [Array, nil]
#
# @!attribute [rw] seasonId
#   @return [Float, nil]
#
# @!attribute [rw] seriesEpisodeNumber
#   @return [Float, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] supportingCharacters
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
EpisodeListMatch = Struct.new(
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

