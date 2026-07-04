<?php
declare(strict_types=1);

// Typed models for the TheOffice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Character entity data model. */
class Character
{
    public string $actor;
    public ?array $episode = null;
    public string $first_appearance;
    public string $gender;
    public float $id;
    public array $job;
    public string $last_appearance;
    public string $marital;
    public string $name;
    public array $workplace;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public float $id;
}

/** Match filter for Character#list (any subset of Character fields). */
class CharacterListMatch
{
    public ?string $actor = null;
    public ?array $episode = null;
    public ?string $first_appearance = null;
    public ?string $gender = null;
    public ?float $id = null;
    public ?array $job = null;
    public ?string $last_appearance = null;
    public ?string $marital = null;
    public ?string $name = null;
    public ?array $workplace = null;
}

/** Episode entity data model. */
class Episode
{
    public string $air_date;
    public string $episode;
    public float $id;
    public ?array $main_character = null;
    public ?array $recurring_character = null;
    public float $season_id;
    public float $series_episode_number;
    public string $summary;
    public ?array $supporting_character = null;
    public string $title;
}

/** Match filter for Episode#list (any subset of Episode fields). */
class EpisodeListMatch
{
    public ?string $air_date = null;
    public ?string $episode = null;
    public ?float $id = null;
    public ?array $main_character = null;
    public ?array $recurring_character = null;
    public ?float $season_id = null;
    public ?float $series_episode_number = null;
    public ?string $summary = null;
    public ?array $supporting_character = null;
    public ?string $title = null;
}

/** Season entity data model. */
class Season
{
    public string $end_date;
    public float $id;
    public float $number;
    public string $start_date;
}

/** Match filter for Season#list (any subset of Season fields). */
class SeasonListMatch
{
    public ?string $end_date = null;
    public ?float $id = null;
    public ?float $number = null;
    public ?string $start_date = null;
}

