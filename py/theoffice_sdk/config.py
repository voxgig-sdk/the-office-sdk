# TheOffice SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


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
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "title": "Actor",
            "type": "`$STRING`",
            "req": True,
            "short": "The actor who played the character.",
          },
          {
            "name": "episodes",
            "title": "Episodes",
            "type": "`$ARRAY`",
            "short": "List of episodes the character appeared in.",
          },
          {
            "name": "firstAppearance",
            "title": "First Appearance",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the episode the character first appeared in.",
          },
          {
            "name": "gender",
            "title": "Gender",
            "type": "`$STRING`",
            "req": True,
            "short": "The character's gender.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Unique identifier for the character.",
          },
          {
            "name": "job",
            "title": "Job",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of jobs the character has.",
          },
          {
            "name": "lastAppearance",
            "title": "Last Appearance",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the last episode the character appeared in.",
          },
          {
            "name": "marital",
            "title": "Marital",
            "type": "`$STRING`",
            "req": True,
            "short": "The character's marital status.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "The character's name.",
          },
          {
            "name": "workplace",
            "title": "Workplace",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of locations a character has worked at.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/characters",
                "segments": [
                  {
                    "lit": "characters",
                  },
                ],
                "parts": [
                  "characters",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "include_episode",
                      "orig": "includeEpisodes",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "false",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 1,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "include_episode",
                    "limit",
                    "page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/character/{id}",
                "segments": [
                  {
                    "lit": "character",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "character",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$NUMBER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "include_episode",
                      "orig": "includeEpisodes",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "false",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "include_episode",
                  ],
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
            "title": "Air Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Original air date.",
          },
          {
            "name": "episode",
            "title": "Episode",
            "type": "`$STRING`",
            "req": True,
            "short": "Episode number.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Unique identifier for the episode.",
          },
          {
            "name": "mainCharacters",
            "title": "Main Characters",
            "type": "`$ARRAY`",
            "short": "Main characters in the episode.",
          },
          {
            "name": "recurringCharacters",
            "title": "Recurring Characters",
            "type": "`$ARRAY`",
            "short": "Recurring characters in the episode.",
          },
          {
            "name": "seasonId",
            "title": "Season Id",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Season ID.",
          },
          {
            "name": "seriesEpisodeNumber",
            "title": "Series Episode Number",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Episode number in the series.",
          },
          {
            "name": "summary",
            "title": "Summary",
            "type": "`$STRING`",
            "req": True,
            "short": "Short summary of the episode.",
          },
          {
            "name": "supportingCharacters",
            "title": "Supporting Characters",
            "type": "`$ARRAY`",
            "short": "Supporting characters in the episode.",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
            "short": "Title of the episode.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "episode",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/episodes",
                "segments": [
                  {
                    "lit": "episodes",
                  },
                ],
                "parts": [
                  "episodes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "args": {
                  "query": [
                    {
                      "name": "include_character",
                      "orig": "includeCharacters",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "false",
                    },
                    {
                      "name": "limit",
                      "orig": "limit",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 10,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$NUMBER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "season",
                      "orig": "season",
                      "type": "`$NUMBER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "include_character",
                    "limit",
                    "page",
                    "season",
                  ],
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
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "number",
            "title": "Number",
            "type": "`$NUMBER`",
            "req": True,
          },
          {
            "name": "startDate",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "season",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/seasons",
                "segments": [
                  {
                    "lit": "seasons",
                  },
                ],
                "parts": [
                  "seasons",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
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
