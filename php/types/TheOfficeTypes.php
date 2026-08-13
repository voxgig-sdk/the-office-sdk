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
    public ?array $episodes = null;
    public string $firstAppearance;
    public string $gender;
    public float $id;
    public array $job;
    public string $lastAppearance;
    public string $marital;
    public string $name;
    public array $workplace;
}

/** Request payload for Character#load. */
class CharacterLoadMatch
{
    public float $id;
}

/** Request payload for Character#list. */
class CharacterListMatch
{
    public ?string $actor = null;
    public ?array $episodes = null;
    public ?string $firstAppearance = null;
    public ?string $gender = null;
    public ?float $id = null;
    public ?array $job = null;
    public ?string $lastAppearance = null;
    public ?string $marital = null;
    public ?string $name = null;
    public ?array $workplace = null;
}

/** Episode entity data model. */
class Episode
{
    public string $airDate;
    public string $episode;
    public float $id;
    public ?array $mainCharacters = null;
    public ?array $recurringCharacters = null;
    public float $seasonId;
    public float $seriesEpisodeNumber;
    public string $summary;
    public ?array $supportingCharacters = null;
    public string $title;
}

/** Request payload for Episode#list. */
class EpisodeListMatch
{
    public ?string $airDate = null;
    public ?string $episode = null;
    public ?float $id = null;
    public ?array $mainCharacters = null;
    public ?array $recurringCharacters = null;
    public ?float $seasonId = null;
    public ?float $seriesEpisodeNumber = null;
    public ?string $summary = null;
    public ?array $supportingCharacters = null;
    public ?string $title = null;
}

/** Season entity data model. */
class Season
{
    public string $endDate;
    public float $id;
    public float $number;
    public string $startDate;
}

/** Request payload for Season#list. */
class SeasonListMatch
{
    public ?string $endDate = null;
    public ?float $id = null;
    public ?float $number = null;
    public ?string $startDate = null;
}

