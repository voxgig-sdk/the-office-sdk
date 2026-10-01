package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TheOffice",
			"slug": "the-office",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://www.theofficeapi.dev/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"character": map[string]any{},
				"episode": map[string]any{},
				"season": map[string]any{},
			},
		},
		"entity": map[string]any{
			"character": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actor",
						"title": "Actor",
						"type": "`$STRING`",
						"req": true,
						"short": "The actor who played the character.",
					},
					map[string]any{
						"name": "episodes",
						"title": "Episodes",
						"type": "`$ARRAY`",
						"short": "List of episodes the character appeared in.",
					},
					map[string]any{
						"name": "firstAppearance",
						"title": "First Appearance",
						"type": "`$STRING`",
						"req": true,
						"short": "Title of the episode the character first appeared in.",
					},
					map[string]any{
						"name": "gender",
						"title": "Gender",
						"type": "`$STRING`",
						"req": true,
						"short": "The character's gender.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Unique identifier for the character.",
					},
					map[string]any{
						"name": "job",
						"title": "Job",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of jobs the character has.",
					},
					map[string]any{
						"name": "lastAppearance",
						"title": "Last Appearance",
						"type": "`$STRING`",
						"req": true,
						"short": "Title of the last episode the character appeared in.",
					},
					map[string]any{
						"name": "marital",
						"title": "Marital",
						"type": "`$STRING`",
						"req": true,
						"short": "The character's marital status.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The character's name.",
					},
					map[string]any{
						"name": "workplace",
						"title": "Workplace",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of locations a character has worked at.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/characters",
								"segments": []any{
									map[string]any{
										"lit": "characters",
									},
								},
								"parts": []any{
									"characters",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "include_episode",
											"orig": "includeEpisodes",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_episode",
										"limit",
										"page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/character/{id}",
								"segments": []any{
									map[string]any{
										"lit": "character",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"character",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$NUMBER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "include_episode",
											"orig": "includeEpisodes",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_episode",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "airDate",
						"title": "Air Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Original air date.",
					},
					map[string]any{
						"name": "episode",
						"title": "Episode",
						"type": "`$STRING`",
						"req": true,
						"short": "Episode number.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Unique identifier for the episode.",
					},
					map[string]any{
						"name": "mainCharacters",
						"title": "Main Characters",
						"type": "`$ARRAY`",
						"short": "Main characters in the episode.",
					},
					map[string]any{
						"name": "recurringCharacters",
						"title": "Recurring Characters",
						"type": "`$ARRAY`",
						"short": "Recurring characters in the episode.",
					},
					map[string]any{
						"name": "seasonId",
						"title": "Season Id",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Season ID.",
					},
					map[string]any{
						"name": "seriesEpisodeNumber",
						"title": "Series Episode Number",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Episode number in the series.",
					},
					map[string]any{
						"name": "summary",
						"title": "Summary",
						"type": "`$STRING`",
						"req": true,
						"short": "Short summary of the episode.",
					},
					map[string]any{
						"name": "supportingCharacters",
						"title": "Supporting Characters",
						"type": "`$ARRAY`",
						"short": "Supporting characters in the episode.",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
						"short": "Title of the episode.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "episode",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/episodes",
								"segments": []any{
									map[string]any{
										"lit": "episodes",
									},
								},
								"parts": []any{
									"episodes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "include_character",
											"orig": "includeCharacters",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "season",
											"orig": "season",
											"type": "`$NUMBER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"include_character",
										"limit",
										"page",
										"season",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"season": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "endDate",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "number",
						"title": "Number",
						"type": "`$NUMBER`",
						"req": true,
					},
					map[string]any{
						"name": "startDate",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "season",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/seasons",
								"segments": []any{
									map[string]any{
										"lit": "seasons",
									},
								},
								"parts": []any{
									"seasons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
