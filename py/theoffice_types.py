# Typed models for the TheOffice SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Character:
    actor: str
    first_appearance: str
    gender: str
    id: float
    job: list
    last_appearance: str
    marital: str
    name: str
    workplace: list
    episode: Optional[list] = None


@dataclass
class CharacterLoadMatch:
    id: float


@dataclass
class CharacterListMatch:
    actor: Optional[str] = None
    episode: Optional[list] = None
    first_appearance: Optional[str] = None
    gender: Optional[str] = None
    id: Optional[float] = None
    job: Optional[list] = None
    last_appearance: Optional[str] = None
    marital: Optional[str] = None
    name: Optional[str] = None
    workplace: Optional[list] = None


@dataclass
class Episode:
    air_date: str
    episode: str
    id: float
    season_id: float
    series_episode_number: float
    summary: str
    title: str
    main_character: Optional[list] = None
    recurring_character: Optional[list] = None
    supporting_character: Optional[list] = None


@dataclass
class EpisodeListMatch:
    air_date: Optional[str] = None
    episode: Optional[str] = None
    id: Optional[float] = None
    main_character: Optional[list] = None
    recurring_character: Optional[list] = None
    season_id: Optional[float] = None
    series_episode_number: Optional[float] = None
    summary: Optional[str] = None
    supporting_character: Optional[list] = None
    title: Optional[str] = None


@dataclass
class Season:
    end_date: str
    id: float
    number: float
    start_date: str


@dataclass
class SeasonListMatch:
    end_date: Optional[str] = None
    id: Optional[float] = None
    number: Optional[float] = None
    start_date: Optional[str] = None

