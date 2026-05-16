
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ProjectName',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    }

  }


  options = {
    base: 'https://www.theofficeapi.dev/api',

    auth: {
      prefix: 'Bearer',
    },

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
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "episode",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 1
        },
        {
          "name": "first_appearance",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 2
        },
        {
          "name": "gender",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        },
        {
          "name": "id",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 4
        },
        {
          "name": "job",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 5
        },
        {
          "name": "last_appearance",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 6
        },
        {
          "name": "marital",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 8
        },
        {
          "name": "workplace",
          "req": true,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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
                    "reqd": true,
                    "type": "`$NUMBER`",
                    "active": true
                  }
                ],
                "query": [
                  {
                    "example": "false",
                    "kind": "query",
                    "name": "include_episode",
                    "orig": "include_episode",
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "episode": {
      "fields": [
        {
          "name": "air_date",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "episode",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 1
        },
        {
          "name": "id",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "main_character",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 3
        },
        {
          "name": "recurring_character",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 4
        },
        {
          "name": "season_id",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 5
        },
        {
          "name": "series_episode_number",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 6
        },
        {
          "name": "summary",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 7
        },
        {
          "name": "supporting_character",
          "req": false,
          "type": "`$ARRAY`",
          "active": true,
          "index$": 8
        },
        {
          "name": "title",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 9
        }
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
                    "reqd": false,
                    "type": "`$STRING`",
                    "active": true
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "limit",
                    "orig": "limit",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  },
                  {
                    "kind": "query",
                    "name": "season",
                    "orig": "season",
                    "reqd": false,
                    "type": "`$NUMBER`",
                    "active": true
                  }
                ]
              },
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
              },
              "active": true,
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "season": {
      "fields": [
        {
          "name": "end_date",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 0
        },
        {
          "name": "id",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 1
        },
        {
          "name": "number",
          "req": true,
          "type": "`$NUMBER`",
          "active": true,
          "index$": 2
        },
        {
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "active": true,
          "index$": 3
        }
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
                "seasons"
              ],
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "active": true,
              "args": {},
              "select": {},
              "index$": 0
            }
          ],
          "input": "data",
          "key$": "list"
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

