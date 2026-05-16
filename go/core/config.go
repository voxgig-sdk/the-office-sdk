package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "TheOffice",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://www.theofficeapi.dev/api",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
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
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "episode",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "first_appearance",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "gender",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "job",
						"req": true,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "last_appearance",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "marital",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "workplace",
						"req": true,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
				},
				"name": "character",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "include_episode",
											"orig": "include_episode",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/characters",
								"parts": []any{
									"characters",
								},
								"select": map[string]any{
									"exist": []any{
										"include_episode",
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "include_episode",
											"orig": "include_episode",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/character/{id}",
								"parts": []any{
									"character",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"include_episode",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"episode": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "air_date",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "episode",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "main_character",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "recurring_character",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "season_id",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "series_episode_number",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "summary",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "supporting_character",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "title",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 9,
					},
				},
				"name": "episode",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "include_character",
											"orig": "include_character",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
										map[string]any{
											"kind": "query",
											"name": "season",
											"orig": "season",
											"reqd": false,
											"type": "`$NUMBER`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/episodes",
								"parts": []any{
									"episodes",
								},
								"select": map[string]any{
									"exist": []any{
										"include_character",
										"limit",
										"page",
										"season",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"season": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "end_date",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "number",
						"req": true,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
				},
				"name": "season",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/seasons",
								"parts": []any{
									"seasons",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
