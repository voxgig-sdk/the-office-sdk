# TheOffice TypeScript SDK Reference

Complete API reference for the TheOffice TypeScript SDK.


## TheOfficeSDK

### Constructor

```ts
new TheOfficeSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TheOfficeSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TheOfficeSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TheOfficeSDK` instance in test mode.


### Instance Methods

#### `Character(data?: object)`

Create a new `Character` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacterEntity` instance.

#### `Episode(data?: object)`

Create a new `Episode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EpisodeEntity` instance.

#### `Season(data?: object)`

Create a new `Season` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeasonEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TheOfficeSDK.test()`.

**Returns:** `TheOfficeSDK` instance in test mode.


---

## CharacterEntity

```ts
const character = client.Character()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `episode` | `any[]` | No |  |
| `first_appearance` | `string` | Yes |  |
| `gender` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `job` | `any[]` | Yes |  |
| `last_appearance` | `string` | Yes |  |
| `marital` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `workplace` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Character().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Character().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacterEntity` instance with the same client and
options.

#### `client()`

Return the parent `TheOfficeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EpisodeEntity

```ts
const episode = client.Episode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `air_date` | `string` | Yes |  |
| `episode` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `main_character` | `any[]` | No |  |
| `recurring_character` | `any[]` | No |  |
| `season_id` | `number` | Yes |  |
| `series_episode_number` | `number` | Yes |  |
| `summary` | `string` | Yes |  |
| `supporting_character` | `any[]` | No |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Episode().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EpisodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `TheOfficeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeasonEntity

```ts
const season = client.Season()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_date` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `number` | `number` | Yes |  |
| `start_date` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Season().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeasonEntity` instance with the same client and
options.

#### `client()`

Return the parent `TheOfficeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new TheOfficeSDK({
  feature: {
    test: { active: true },
  }
})
```

