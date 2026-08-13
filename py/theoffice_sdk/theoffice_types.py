# Typed models for the TheOffice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class CharacterRequired(TypedDict):
    actor: str
    firstAppearance: str
    gender: str
    id: float
    job: list
    lastAppearance: str
    marital: str
    name: str
    workplace: list


class Character(CharacterRequired, total=False):
    episodes: list


class CharacterLoadMatch(TypedDict):
    id: float


class CharacterListMatch(TypedDict, total=False):
    actor: str
    episodes: list
    firstAppearance: str
    gender: str
    id: float
    job: list
    lastAppearance: str
    marital: str
    name: str
    workplace: list


class EpisodeRequired(TypedDict):
    airDate: str
    episode: str
    id: float
    seasonId: float
    seriesEpisodeNumber: float
    summary: str
    title: str


class Episode(EpisodeRequired, total=False):
    mainCharacters: list
    recurringCharacters: list
    supportingCharacters: list


class EpisodeListMatch(TypedDict, total=False):
    airDate: str
    episode: str
    id: float
    mainCharacters: list
    recurringCharacters: list
    seasonId: float
    seriesEpisodeNumber: float
    summary: str
    supportingCharacters: list
    title: str


class Season(TypedDict):
    endDate: str
    id: float
    number: float
    startDate: str


class SeasonListMatch(TypedDict, total=False):
    endDate: str
    id: float
    number: float
    startDate: str
