// Typed models for the TheOffice SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Character is the typed data model for the character entity.
type Character struct {
	Actor string `json:"actor"`
	Episode *[]any `json:"episode,omitempty"`
	FirstAppearance string `json:"first_appearance"`
	Gender string `json:"gender"`
	Id float64 `json:"id"`
	Job []any `json:"job"`
	LastAppearance string `json:"last_appearance"`
	Marital string `json:"marital"`
	Name string `json:"name"`
	Workplace []any `json:"workplace"`
}

// CharacterLoadMatch is the typed request payload for Character.LoadTyped.
type CharacterLoadMatch struct {
	Id float64 `json:"id"`
}

// CharacterListMatch is the typed request payload for Character.ListTyped.
type CharacterListMatch struct {
	Actor *string `json:"actor,omitempty"`
	Episode *[]any `json:"episode,omitempty"`
	FirstAppearance *string `json:"first_appearance,omitempty"`
	Gender *string `json:"gender,omitempty"`
	Id *float64 `json:"id,omitempty"`
	Job *[]any `json:"job,omitempty"`
	LastAppearance *string `json:"last_appearance,omitempty"`
	Marital *string `json:"marital,omitempty"`
	Name *string `json:"name,omitempty"`
	Workplace *[]any `json:"workplace,omitempty"`
}

// Episode is the typed data model for the episode entity.
type Episode struct {
	AirDate string `json:"air_date"`
	Episode string `json:"episode"`
	Id float64 `json:"id"`
	MainCharacter *[]any `json:"main_character,omitempty"`
	RecurringCharacter *[]any `json:"recurring_character,omitempty"`
	SeasonId float64 `json:"season_id"`
	SeriesEpisodeNumber float64 `json:"series_episode_number"`
	Summary string `json:"summary"`
	SupportingCharacter *[]any `json:"supporting_character,omitempty"`
	Title string `json:"title"`
}

// EpisodeListMatch is the typed request payload for Episode.ListTyped.
type EpisodeListMatch struct {
	AirDate *string `json:"air_date,omitempty"`
	Episode *string `json:"episode,omitempty"`
	Id *float64 `json:"id,omitempty"`
	MainCharacter *[]any `json:"main_character,omitempty"`
	RecurringCharacter *[]any `json:"recurring_character,omitempty"`
	SeasonId *float64 `json:"season_id,omitempty"`
	SeriesEpisodeNumber *float64 `json:"series_episode_number,omitempty"`
	Summary *string `json:"summary,omitempty"`
	SupportingCharacter *[]any `json:"supporting_character,omitempty"`
	Title *string `json:"title,omitempty"`
}

// Season is the typed data model for the season entity.
type Season struct {
	EndDate string `json:"end_date"`
	Id float64 `json:"id"`
	Number float64 `json:"number"`
	StartDate string `json:"start_date"`
}

// SeasonListMatch is the typed request payload for Season.ListTyped.
type SeasonListMatch struct {
	EndDate *string `json:"end_date,omitempty"`
	Id *float64 `json:"id,omitempty"`
	Number *float64 `json:"number,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
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

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
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

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
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
