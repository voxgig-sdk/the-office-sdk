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
    first_appearance: str
    gender: str
    id: float
    job: list
    last_appearance: str
    marital: str
    name: str
    workplace: list


class Character(CharacterRequired, total=False):
    episode: list


class CharacterLoadMatch(TypedDict):
    id: float


class CharacterListMatch(TypedDict, total=False):
    actor: str
    episode: list
    first_appearance: str
    gender: str
    id: float
    job: list
    last_appearance: str
    marital: str
    name: str
    workplace: list


class EpisodeRequired(TypedDict):
    air_date: str
    episode: str
    id: float
    season_id: float
    series_episode_number: float
    summary: str
    title: str


class Episode(EpisodeRequired, total=False):
    main_character: list
    recurring_character: list
    supporting_character: list


class EpisodeListMatch(TypedDict, total=False):
    air_date: str
    episode: str
    id: float
    main_character: list
    recurring_character: list
    season_id: float
    series_episode_number: float
    summary: str
    supporting_character: list
    title: str


class Season(TypedDict):
    end_date: str
    id: float
    number: float
    start_date: str


class SeasonListMatch(TypedDict, total=False):
    end_date: str
    id: float
    number: float
    start_date: str
