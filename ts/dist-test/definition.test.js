"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "character",
        "accessor": "Character",
        "op": "list",
        "method": "GET",
        "path": "/characters",
        "args": [],
        "select": {
            "include_episode": "false",
            "limit": 10,
            "page": 1
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "includeEpisodes",
            "limit",
            "page"
        ],
        "queryArgs": [
            {
                "name": "include_episode",
                "wire": "includeEpisodes"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "page",
                "wire": "page"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "results": [
                {
                    "id": 1,
                    "name": "x",
                    "gender": "x",
                    "marital": "x",
                    "job": [
                        "x"
                    ],
                    "workplace": [
                        "x"
                    ],
                    "firstAppearance": "x",
                    "lastAppearance": "x",
                    "actor": "x",
                    "episodes": [
                        {
                            "type": "RECURRING",
                            "episode": {
                                "id": 1,
                                "title": "x"
                            }
                        }
                    ]
                }
            ],
            "meta": {
                "isFirstPage": true,
                "isLastPage": true,
                "currentPage": 1,
                "nextPage": 1,
                "pageCount": 1,
                "previousPage": 1,
                "totalCount": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "character",
        "accessor": "Character",
        "op": "load",
        "method": "GET",
        "path": "/character/{id}",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "p1"
            }
        ],
        "select": {
            "include_episode": "false"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "includeEpisodes"
        ],
        "queryArgs": [
            {
                "name": "include_episode",
                "wire": "includeEpisodes"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "id": 1,
            "name": "x",
            "gender": "x",
            "marital": "x",
            "job": [
                "x"
            ],
            "workplace": [
                "x"
            ],
            "firstAppearance": "x",
            "lastAppearance": "x",
            "actor": "x"
        },
        "idField": "id"
    },
    {
        "entity": "episode",
        "accessor": "Episode",
        "op": "list",
        "method": "GET",
        "path": "/episodes",
        "args": [],
        "select": {
            "include_character": "false",
            "limit": 10,
            "page": 1,
            "season": "v1"
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "includeCharacters",
            "season",
            "limit",
            "page"
        ],
        "queryArgs": [
            {
                "name": "include_character",
                "wire": "includeCharacters"
            },
            {
                "name": "limit",
                "wire": "limit"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "season",
                "wire": "season"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "results": [
                {
                    "id": 1,
                    "title": "x",
                    "summary": "x",
                    "airDate": "x",
                    "episode": "x",
                    "seriesEpisodeNumber": 1,
                    "seasonId": 1,
                    "mainCharacters": [
                        {
                            "id": 1,
                            "name": "x"
                        }
                    ],
                    "supportingCharacters": [
                        {
                            "id": 1,
                            "name": "x"
                        }
                    ],
                    "recurringCharacters": [
                        {
                            "id": 1,
                            "name": "x"
                        }
                    ]
                }
            ],
            "meta": {
                "isFirstPage": true,
                "isLastPage": true,
                "currentPage": 1,
                "nextPage": 1,
                "pageCount": 1,
                "previousPage": 1,
                "totalCount": 1
            }
        },
        "idField": "id"
    },
    {
        "entity": "season",
        "accessor": "Season",
        "op": "list",
        "method": "GET",
        "path": "/seasons",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": [
            {
                "id": 1,
                "number": 1,
                "startDate": "x",
                "endDate": "x"
            }
        ],
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map