# TheOffice SDK configuration


def make_config():
    return {
        "main": {
            "name": "TheOffice",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.theofficeapi.dev/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "character": {},
                "episode": {},
                "season": {},
            },
        },
        "entity": {
      "character": {
        "fields": [
          {
            "name": "actor",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "episode",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "first_appearance",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "gender",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "id",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "job",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "last_appearance",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "marital",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "workplace",
            "req": True,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "false",
                      "kind": "query",
                      "name": "include_episode",
                      "orig": "include_episode",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/characters",
                "parts": [
                  "characters",
                ],
                "select": {
                  "exist": [
                    "include_episode",
                    "limit",
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
            "name": "load",
            "points": [
              {
                "args": {
                  "params": [
                    {
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                  "query": [
                    {
                      "example": "false",
                      "kind": "query",
                      "name": "include_episode",
                      "orig": "include_episode",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/character/{id}",
                "parts": [
                  "character",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "include_episode",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode": {
        "fields": [
          {
            "name": "air_date",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "episode",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "id",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "main_character",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "recurring_character",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "season_id",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "series_episode_number",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "summary",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "supporting_character",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 9,
          },
        ],
        "name": "episode",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "false",
                      "kind": "query",
                      "name": "include_character",
                      "orig": "include_character",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "season",
                      "orig": "season",
                      "reqd": False,
                      "type": "`$NUMBER`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/episodes",
                "parts": [
                  "episodes",
                ],
                "select": {
                  "exist": [
                    "include_character",
                    "limit",
                    "page",
                    "season",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "season": {
        "fields": [
          {
            "name": "end_date",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "id",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "number",
            "req": True,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "start_date",
            "req": True,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
        ],
        "name": "season",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/seasons",
                "parts": [
                  "seasons",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
