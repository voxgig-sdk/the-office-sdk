
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'TheOffice',
        slug: "the-office",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://www.theofficeapi.dev/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      character: {
      },

      episode: {
      },

      season: {
      },

    }
  }


  entity = {
    "character": {
      "fields": [
        {
          "name": "actor",
          "req": true,
          "short": "The actor who played the character.",
          "type": "`$STRING`"
        },
        {
          "name": "episodes",
          "short": "List of episodes the character appeared in.",
          "type": "`$ARRAY`"
        },
        {
          "name": "firstAppearance",
          "req": true,
          "short": "Title of the episode the character first appeared in.",
          "type": "`$STRING`"
        },
        {
          "name": "gender",
          "req": true,
          "short": "The character's gender.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the character.",
          "type": "`$NUMBER`"
        },
        {
          "name": "job",
          "req": true,
          "short": "List of jobs the character has.",
          "type": "`$ARRAY`"
        },
        {
          "name": "lastAppearance",
          "req": true,
          "short": "Title of the last episode the character appeared in.",
          "type": "`$STRING`"
        },
        {
          "name": "marital",
          "req": true,
          "short": "The character's marital status.",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "req": true,
          "short": "The character's name.",
          "type": "`$STRING`"
        },
        {
          "name": "workplace",
          "req": true,
          "short": "List of locations a character has worked at.",
          "type": "`$ARRAY`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/characters",
              "parts": [
                "characters"
              ],
              "select": {
                "exist": [
                  "include_episode",
                  "limit",
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
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
                    "reqd": true,
                    "type": "`$NUMBER`"
                  }
                ],
                "query": [
                  {
                    "example": "false",
                    "kind": "query",
                    "name": "include_episode",
                    "orig": "include_episode",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/character/{id}",
              "parts": [
                "character",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id",
                  "include_episode"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "episode": {
      "fields": [
        {
          "name": "airDate",
          "req": true,
          "short": "Original air date.",
          "type": "`$STRING`"
        },
        {
          "name": "episode",
          "req": true,
          "short": "Episode number.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "short": "Unique identifier for the episode.",
          "type": "`$NUMBER`"
        },
        {
          "name": "mainCharacters",
          "short": "Main characters in the episode.",
          "type": "`$ARRAY`"
        },
        {
          "name": "recurringCharacters",
          "short": "Recurring characters in the episode.",
          "type": "`$ARRAY`"
        },
        {
          "name": "seasonId",
          "req": true,
          "short": "Season ID.",
          "type": "`$NUMBER`"
        },
        {
          "name": "seriesEpisodeNumber",
          "req": true,
          "short": "Episode number in the series.",
          "type": "`$NUMBER`"
        },
        {
          "name": "summary",
          "req": true,
          "short": "Short summary of the episode.",
          "type": "`$STRING`"
        },
        {
          "name": "supportingCharacters",
          "short": "Supporting characters in the episode.",
          "type": "`$ARRAY`"
        },
        {
          "name": "title",
          "req": true,
          "short": "Title of the episode.",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$NUMBER`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$NUMBER`"
                  },
                  {
                    "kind": "query",
                    "name": "season",
                    "orig": "season",
                    "type": "`$NUMBER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/episodes",
              "parts": [
                "episodes"
              ],
              "select": {
                "exist": [
                  "include_character",
                  "limit",
                  "page",
                  "season"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "season": {
      "fields": [
        {
          "name": "endDate",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "number",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "startDate",
          "req": true,
          "type": "`$STRING`"
        }
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
                "seasons"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

