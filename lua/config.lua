-- TheOffice SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "TheOffice",
      slug = "the-office",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://www.theofficeapi.dev/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["character"] = {},
        ["episode"] = {},
        ["season"] = {},
      },
    },
    entity = {
      ["character"] = {
        ["fields"] = {
          {
            ["name"] = "actor",
            ["title"] = "Actor",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The actor who played the character.",
          },
          {
            ["name"] = "episodes",
            ["title"] = "Episodes",
            ["type"] = "`$ARRAY`",
            ["short"] = "List of episodes the character appeared in.",
          },
          {
            ["name"] = "firstAppearance",
            ["title"] = "First Appearance",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Title of the episode the character first appeared in.",
          },
          {
            ["name"] = "gender",
            ["title"] = "Gender",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The character's gender.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Unique identifier for the character.",
          },
          {
            ["name"] = "job",
            ["title"] = "Job",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of jobs the character has.",
          },
          {
            ["name"] = "lastAppearance",
            ["title"] = "Last Appearance",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Title of the last episode the character appeared in.",
          },
          {
            ["name"] = "marital",
            ["title"] = "Marital",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The character's marital status.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The character's name.",
          },
          {
            ["name"] = "workplace",
            ["title"] = "Workplace",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
            ["short"] = "List of locations a character has worked at.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "character",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/characters",
                ["segments"] = {
                  {
                    ["lit"] = "characters",
                  },
                },
                ["parts"] = {
                  "characters",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "include_episode",
                      ["orig"] = "include_episode",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "include_episode",
                    "limit",
                    "page",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/character/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "character",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "character",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "include_episode",
                      ["orig"] = "include_episode",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "include_episode",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["episode"] = {
        ["fields"] = {
          {
            ["name"] = "airDate",
            ["title"] = "Air Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Original air date.",
          },
          {
            ["name"] = "episode",
            ["title"] = "Episode",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Episode number.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Unique identifier for the episode.",
          },
          {
            ["name"] = "mainCharacters",
            ["title"] = "Main Characters",
            ["type"] = "`$ARRAY`",
            ["short"] = "Main characters in the episode.",
          },
          {
            ["name"] = "recurringCharacters",
            ["title"] = "Recurring Characters",
            ["type"] = "`$ARRAY`",
            ["short"] = "Recurring characters in the episode.",
          },
          {
            ["name"] = "seasonId",
            ["title"] = "Season Id",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Season ID.",
          },
          {
            ["name"] = "seriesEpisodeNumber",
            ["title"] = "Series Episode Number",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
            ["short"] = "Episode number in the series.",
          },
          {
            ["name"] = "summary",
            ["title"] = "Summary",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Short summary of the episode.",
          },
          {
            ["name"] = "supportingCharacters",
            ["title"] = "Supporting Characters",
            ["type"] = "`$ARRAY`",
            ["short"] = "Supporting characters in the episode.",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Title of the episode.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "episode",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/episodes",
                ["segments"] = {
                  {
                    ["lit"] = "episodes",
                  },
                },
                ["parts"] = {
                  "episodes",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "include_character",
                      ["orig"] = "include_character",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "season",
                      ["orig"] = "season",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["season"] = {
        ["fields"] = {
          {
            ["name"] = "endDate",
            ["title"] = "End Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "number",
            ["title"] = "Number",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
          {
            ["name"] = "startDate",
            ["title"] = "Start Date",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "season",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/seasons",
                ["segments"] = {
                  {
                    ["lit"] = "seasons",
                  },
                },
                ["parts"] = {
                  "seasons",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
