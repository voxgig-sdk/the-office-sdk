<?php
declare(strict_types=1);

// TheOffice SDK configuration

class TheOfficeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "TheOffice",
                "slug" => "the-office",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://www.theofficeapi.dev/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "character" => [],
                    "episode" => [],
                    "season" => [],
                ],
            ],
            "entity" => [
        'character' => [
          'fields' => [
            [
              'name' => 'actor',
              'title' => 'Actor',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The actor who played the character.',
            ],
            [
              'name' => 'episodes',
              'title' => 'Episodes',
              'type' => '`$ARRAY`',
              'short' => 'List of episodes the character appeared in.',
            ],
            [
              'name' => 'firstAppearance',
              'title' => 'First Appearance',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Title of the episode the character first appeared in.',
            ],
            [
              'name' => 'gender',
              'title' => 'Gender',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The character\'s gender.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Unique identifier for the character.',
            ],
            [
              'name' => 'job',
              'title' => 'Job',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'List of jobs the character has.',
            ],
            [
              'name' => 'lastAppearance',
              'title' => 'Last Appearance',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Title of the last episode the character appeared in.',
            ],
            [
              'name' => 'marital',
              'title' => 'Marital',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The character\'s marital status.',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'The character\'s name.',
            ],
            [
              'name' => 'workplace',
              'title' => 'Workplace',
              'type' => '`$ARRAY`',
              'req' => true,
              'short' => 'List of locations a character has worked at.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'character',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/characters',
                  'segments' => [
                    [
                      'lit' => 'characters',
                    ],
                  ],
                  'parts' => [
                    'characters',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'include_episode',
                        'orig' => 'includeEpisodes',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/character/{id}',
                  'segments' => [
                    [
                      'lit' => 'character',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'parts' => [
                    'character',
                    '{id}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'id',
                        'type' => '`$NUMBER`',
                        'kind' => 'param',
                        'reqd' => true,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'include_episode',
                        'orig' => 'includeEpisodes',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'episode' => [
          'fields' => [
            [
              'name' => 'airDate',
              'title' => 'Air Date',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Original air date.',
            ],
            [
              'name' => 'episode',
              'title' => 'Episode',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Episode number.',
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Unique identifier for the episode.',
            ],
            [
              'name' => 'mainCharacters',
              'title' => 'Main Characters',
              'type' => '`$ARRAY`',
              'short' => 'Main characters in the episode.',
            ],
            [
              'name' => 'recurringCharacters',
              'title' => 'Recurring Characters',
              'type' => '`$ARRAY`',
              'short' => 'Recurring characters in the episode.',
            ],
            [
              'name' => 'seasonId',
              'title' => 'Season Id',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Season ID.',
            ],
            [
              'name' => 'seriesEpisodeNumber',
              'title' => 'Series Episode Number',
              'type' => '`$NUMBER`',
              'req' => true,
              'short' => 'Episode number in the series.',
            ],
            [
              'name' => 'summary',
              'title' => 'Summary',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Short summary of the episode.',
            ],
            [
              'name' => 'supportingCharacters',
              'title' => 'Supporting Characters',
              'type' => '`$ARRAY`',
              'short' => 'Supporting characters in the episode.',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'req' => true,
              'short' => 'Title of the episode.',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'episode',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/episodes',
                  'segments' => [
                    [
                      'lit' => 'episodes',
                    ],
                  ],
                  'parts' => [
                    'episodes',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'include_character',
                        'orig' => 'includeCharacters',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'false',
                      ],
                      [
                        'name' => 'limit',
                        'orig' => 'limit',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 10,
                      ],
                      [
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                        'example' => 1,
                      ],
                      [
                        'name' => 'season',
                        'orig' => 'season',
                        'type' => '`$NUMBER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'season' => [
          'fields' => [
            [
              'name' => 'endDate',
              'title' => 'End Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$NUMBER`',
              'req' => true,
            ],
            [
              'name' => 'number',
              'title' => 'Number',
              'type' => '`$NUMBER`',
              'req' => true,
            ],
            [
              'name' => 'startDate',
              'title' => 'Start Date',
              'type' => '`$STRING`',
              'req' => true,
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'season',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/seasons',
                  'segments' => [
                    [
                      'lit' => 'seasons',
                    ],
                  ],
                  'parts' => [
                    'seasons',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [],
                  'select' => [],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return TheOfficeFeatures::make_feature($name);
    }
}
