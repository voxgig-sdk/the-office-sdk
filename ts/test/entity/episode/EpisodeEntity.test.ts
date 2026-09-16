

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TheOfficeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('EpisodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when THE_OFFICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('THE_OFFICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TheOfficeSDK.test()
    const ent = testsdk.Episode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.THE_OFFICE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'episode.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"airDate","req":true,"short":"Original air date.","type":"`$STRING`","index$":0},{"active":true,"name":"episode","req":true,"short":"Episode number.","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"Unique identifier for the episode.","type":"`$NUMBER`","index$":2},{"active":true,"name":"mainCharacters","req":false,"short":"Main characters in the episode.","type":"`$ARRAY`","index$":3},{"active":true,"name":"recurringCharacters","req":false,"short":"Recurring characters in the episode.","type":"`$ARRAY`","index$":4},{"active":true,"name":"seasonId","req":true,"short":"Season ID.","type":"`$NUMBER`","index$":5},{"active":true,"name":"seriesEpisodeNumber","req":true,"short":"Episode number in the series.","type":"`$NUMBER`","index$":6},{"active":true,"name":"summary","req":true,"short":"Short summary of the episode.","type":"`$STRING`","index$":7},{"active":true,"name":"supportingCharacters","req":false,"short":"Supporting characters in the episode.","type":"`$ARRAY`","index$":8},{"active":true,"name":"title","req":true,"short":"Title of the episode.","type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"false","kind":"query","name":"include_character","orig":"include_character","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$NUMBER`","index$":2},{"active":true,"kind":"query","name":"season","orig":"season","reqd":false,"type":"`$NUMBER`","index$":3}]},"contract":{"id":"GET /episodes","json":"{\"operationId\":\"episodes\",\"parameters\":[{\"description\":\"Include characters in the response.\",\"in\":\"query\",\"name\":\"includeCharacters\",\"schema\":{\"default\":\"false\",\"enum\":[\"false\",\"true\"],\"type\":\"string\"}},{\"description\":\"The season number.\",\"in\":\"query\",\"name\":\"season\",\"schema\":{\"nullable\":true,\"type\":\"number\"}},{\"description\":\"The number of items to return\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":10,\"minimum\":1,\"type\":\"number\"}},{\"description\":\"The page number to return.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"currentPage\":{\"description\":\"The current page.\",\"type\":\"number\"},\"isFirstPage\":{\"description\":\"If the page is the first page available.\",\"type\":\"boolean\"},\"isLastPage\":{\"description\":\"If the page is the last page available.\",\"type\":\"boolean\"},\"nextPage\":{\"description\":\"The next page.\",\"nullable\":true,\"type\":\"number\"},\"pageCount\":{\"description\":\"The total number of pages.\",\"type\":\"number\"},\"previousPage\":{\"description\":\"The previous page.\",\"nullable\":true,\"type\":\"number\"},\"totalCount\":{\"description\":\"The total number of items.\",\"type\":\"number\"}},\"required\":[\"isFirstPage\",\"isLastPage\",\"currentPage\",\"nextPage\",\"pageCount\",\"previousPage\",\"totalCount\"],\"type\":\"object\"},\"results\":{\"description\":\"List of episodes.\",\"items\":{\"properties\":{\"airDate\":{\"description\":\"Original air date.\",\"type\":\"string\"},\"episode\":{\"description\":\"Episode number.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the episode.\",\"type\":\"number\"},\"mainCharacters\":{\"description\":\"Main characters in the episode.\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the character.\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the character.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"recurringCharacters\":{\"description\":\"Recurring characters in the episode.\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the character.\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the character.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"seasonId\":{\"description\":\"Season ID.\",\"type\":\"number\"},\"seriesEpisodeNumber\":{\"description\":\"Episode number in the series.\",\"type\":\"number\"},\"summary\":{\"description\":\"Short summary of the episode.\",\"type\":\"string\"},\"supportingCharacters\":{\"description\":\"Supporting characters in the episode.\",\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the character.\",\"type\":\"number\"},\"name\":{\"description\":\"Name of the character.\",\"type\":\"string\"}},\"required\":[\"id\",\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"title\":{\"description\":\"Title of the episode.\",\"type\":\"string\"}},\"required\":[\"id\",\"title\",\"summary\",\"airDate\",\"episode\",\"seriesEpisodeNumber\",\"seasonId\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\",\"meta\"],\"type\":\"object\"}}},\"description\":\"200\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/episodes","segments":[{"lit":"episodes"}],"select":{"exist":["include_character","limit","page","season"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":1}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0}]}, 'Episode')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let episode_ref01_data = Object.values(setup.data.existing.episode)[0] as any

    // LIST
    const episode_ref01_ent = client.Episode()
    const episode_ref01_match: any = {}

    const episode_ref01_list = (await episode_ref01_ent.list(episode_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/episode/EpisodeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TheOfficeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['episode01','episode02','episode03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'THE_OFFICE_TEST_EPISODE_ENTID': idmap,
    'THE_OFFICE_TEST_LIVE': 'FALSE',
    'THE_OFFICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['THE_OFFICE_TEST_EPISODE_ENTID']

  const live = 'TRUE' === env.THE_OFFICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['THE_OFFICE_TEST_EPISODE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TheOfficeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.THE_OFFICE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
