# TheOffice SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "TheOffice",
            "slug": "the-office",
            "version": "0.0.1",
            "target": "py",
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
            "short": "The actor who played the character.",
            "type": "`$STRING`",
          },
          {
            "name": "episodes",
            "short": "List of episodes the character appeared in.",
            "type": "`$ARRAY`",
          },
          {
            "name": "firstAppearance",
            "req": True,
            "short": "Title of the episode the character first appeared in.",
            "type": "`$STRING`",
          },
          {
            "name": "gender",
            "req": True,
            "short": "The character's gender.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the character.",
            "type": "`$NUMBER`",
          },
          {
            "name": "job",
            "req": True,
            "short": "List of jobs the character has.",
            "type": "`$ARRAY`",
          },
          {
            "name": "lastAppearance",
            "req": True,
            "short": "Title of the last episode the character appeared in.",
            "type": "`$STRING`",
          },
          {
            "name": "marital",
            "req": True,
            "short": "The character's marital status.",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "req": True,
            "short": "The character's name.",
            "type": "`$STRING`",
          },
          {
            "name": "workplace",
            "req": True,
            "short": "List of locations a character has worked at.",
            "type": "`$ARRAY`",
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "input": "data",
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
          "load": {
            "input": "data",
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
                    },
                  ],
                  "query": [
                    {
                      "example": "false",
                      "kind": "query",
                      "name": "include_episode",
                      "orig": "include_episode",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "episode": {
        "fields": [
          {
            "name": "airDate",
            "req": True,
            "short": "Original air date.",
            "type": "`$STRING`",
          },
          {
            "name": "episode",
            "req": True,
            "short": "Episode number.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the episode.",
            "type": "`$NUMBER`",
          },
          {
            "name": "mainCharacters",
            "short": "Main characters in the episode.",
            "type": "`$ARRAY`",
          },
          {
            "name": "recurringCharacters",
            "short": "Recurring characters in the episode.",
            "type": "`$ARRAY`",
          },
          {
            "name": "seasonId",
            "req": True,
            "short": "Season ID.",
            "type": "`$NUMBER`",
          },
          {
            "name": "seriesEpisodeNumber",
            "req": True,
            "short": "Episode number in the series.",
            "type": "`$NUMBER`",
          },
          {
            "name": "summary",
            "req": True,
            "short": "Short summary of the episode.",
            "type": "`$STRING`",
          },
          {
            "name": "supportingCharacters",
            "short": "Supporting characters in the episode.",
            "type": "`$ARRAY`",
          },
          {
            "name": "title",
            "req": True,
            "short": "Title of the episode.",
            "type": "`$STRING`",
          },
        ],
        "name": "episode",
        "op": {
          "list": {
            "input": "data",
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
                      "type": "`$STRING`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$NUMBER`",
                    },
                    {
                      "kind": "query",
                      "name": "season",
                      "orig": "season",
                      "type": "`$NUMBER`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "season": {
        "fields": [
          {
            "name": "endDate",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "number",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "startDate",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "name": "season",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/seasons",
                "parts": [
                  "seasons",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
