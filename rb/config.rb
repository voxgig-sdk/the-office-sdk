# TheOffice SDK configuration

module TheOfficeConfig
  def self.make_config
    {
      "main" => {
        "name" => "TheOffice",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://www.theofficeapi.dev/api",
        "auth" => {
          "prefix" => "Bearer",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "character" => {},
          "episode" => {},
          "season" => {},
        },
      },
      "entity" => {
        "character" => {
          "fields" => [
            {
              "active" => true,
              "name" => "actor",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "episode",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "first_appearance",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "gender",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "job",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "last_appearance",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "marital",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "name",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "workplace",
              "req" => true,
              "type" => "`$ARRAY`",
              "index$" => 9,
            },
          ],
          "name" => "character",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "false",
                        "kind" => "query",
                        "name" => "include_episode",
                        "orig" => "include_episode",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/characters",
                  "parts" => [
                    "characters",
                  ],
                  "select" => {
                    "exist" => [
                      "include_episode",
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "params" => [
                      {
                        "active" => true,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$NUMBER`",
                      },
                    ],
                    "query" => [
                      {
                        "active" => true,
                        "example" => "false",
                        "kind" => "query",
                        "name" => "include_episode",
                        "orig" => "include_episode",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/character/{id}",
                  "parts" => [
                    "character",
                    "{id}",
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                      "include_episode",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "episode" => {
          "fields" => [
            {
              "active" => true,
              "name" => "air_date",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "episode",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "main_character",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 3,
            },
            {
              "active" => true,
              "name" => "recurring_character",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 4,
            },
            {
              "active" => true,
              "name" => "season_id",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 5,
            },
            {
              "active" => true,
              "name" => "series_episode_number",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 6,
            },
            {
              "active" => true,
              "name" => "summary",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 7,
            },
            {
              "active" => true,
              "name" => "supporting_character",
              "req" => false,
              "type" => "`$ARRAY`",
              "index$" => 8,
            },
            {
              "active" => true,
              "name" => "title",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 9,
            },
          ],
          "name" => "episode",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "false",
                        "kind" => "query",
                        "name" => "include_character",
                        "orig" => "include_character",
                        "reqd" => false,
                        "type" => "`$STRING`",
                      },
                      {
                        "active" => true,
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                      {
                        "active" => true,
                        "kind" => "query",
                        "name" => "season",
                        "orig" => "season",
                        "reqd" => false,
                        "type" => "`$NUMBER`",
                      },
                    ],
                  },
                  "method" => "GET",
                  "orig" => "/episodes",
                  "parts" => [
                    "episodes",
                  ],
                  "select" => {
                    "exist" => [
                      "include_character",
                      "limit",
                      "page",
                      "season",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "season" => {
          "fields" => [
            {
              "active" => true,
              "name" => "end_date",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "id",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 1,
            },
            {
              "active" => true,
              "name" => "number",
              "req" => true,
              "type" => "`$NUMBER`",
              "index$" => 2,
            },
            {
              "active" => true,
              "name" => "start_date",
              "req" => true,
              "type" => "`$STRING`",
              "index$" => 3,
            },
          ],
          "name" => "season",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "active" => true,
                  "args" => {},
                  "method" => "GET",
                  "orig" => "/seasons",
                  "parts" => [
                    "seasons",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "list",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    TheOfficeFeatures.make_feature(name)
  end
end
