// Typed models for the TheOffice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/the-office-sdk/go/core"
)

// Character is the typed data model for the character entity.
type Character struct {
	Actor string `json:"actor"`
	Episodes *[]any `json:"episodes,omitempty"`
	FirstAppearance string `json:"firstAppearance"`
	Gender string `json:"gender"`
	Id float64 `json:"id"`
	Job []any `json:"job"`
	LastAppearance string `json:"lastAppearance"`
	Marital string `json:"marital"`
	Name string `json:"name"`
	Workplace []any `json:"workplace"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id float64 `json:"id"`
	IncludeEpisode *string `json:"include_episode,omitempty"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	IncludeEpisode *string `json:"include_episode,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate string `json:"airDate"`
	Episode string `json:"episode"`
	Id float64 `json:"id"`
	MainCharacters *[]any `json:"mainCharacters,omitempty"`
	RecurringCharacters *[]any `json:"recurringCharacters,omitempty"`
	SeasonId float64 `json:"seasonId"`
	SeriesEpisodeNumber float64 `json:"seriesEpisodeNumber"`
	Summary string `json:"summary"`
	SupportingCharacters *[]any `json:"supportingCharacters,omitempty"`
	Title string `json:"title"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	IncludeCharacter *string `json:"include_character,omitempty"`
	Limit *float64 `json:"limit,omitempty"`
	Page *float64 `json:"page,omitempty"`
	Season *float64 `json:"season,omitempty"`
}

// Season is the typed data model for the season entity.
type Season struct {
	EndDate string `json:"endDate"`
	Id float64 `json:"id"`
	Number float64 `json:"number"`
	StartDate string `json:"startDate"`
}

// SeasonListMatch is the typed request payload for Season.ListTyped.
type SeasonListMatch struct {
	EndDate *string `json:"endDate,omitempty"`
	Id *float64 `json:"id,omitempty"`
	Number *float64 `json:"number,omitempty"`
	StartDate *string `json:"startDate,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
