

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"airDate":{"a":true,"h":"Air Date","n":"airDate","r":true,"sh":"Original air date.","t":"`$STRING`","key$":"airDate","index$":0},"episode":{"a":true,"h":"Episode","n":"episode","r":true,"sh":"Episode number.","t":"`$STRING`","key$":"episode","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the episode.","t":"`$NUMBER`","key$":"id","index$":2},"mainCharacters":{"a":true,"h":"Main Characters","n":"mainCharacters","r":false,"sh":"Main characters in the episode.","t":"`$ARRAY`","key$":"mainCharacters","index$":3},"recurringCharacters":{"a":true,"h":"Recurring Characters","n":"recurringCharacters","r":false,"sh":"Recurring characters in the episode.","t":"`$ARRAY`","key$":"recurringCharacters","index$":4},"seasonId":{"a":true,"h":"Season Id","n":"seasonId","r":true,"sh":"Season ID.","t":"`$NUMBER`","key$":"seasonId","index$":5},"seriesEpisodeNumber":{"a":true,"h":"Series Episode Number","n":"seriesEpisodeNumber","r":true,"sh":"Episode number in the series.","t":"`$NUMBER`","key$":"seriesEpisodeNumber","index$":6},"summary":{"a":true,"h":"Summary","n":"summary","r":true,"sh":"Short summary of the episode.","t":"`$STRING`","key$":"summary","index$":7},"supportingCharacters":{"a":true,"h":"Supporting Characters","n":"supportingCharacters","r":false,"sh":"Supporting characters in the episode.","t":"`$ARRAY`","key$":"supportingCharacters","index$":8},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the episode.","t":"`$STRING`","key$":"title","index$":9}},"id":{"field":"id","name":"id"},"name":"episode","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /episodes","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"false","k":"query","n":"include_character","or":"includeCharacters","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":10,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"season","or":"season","r":false,"t":"`$NUMBER`","index$":3}]},"k":"http","m":"GET","o":"/episodes","q":{"exist":["include_character","limit","page","season"]},"r":{},"s":[{"lit":"episodes"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"episode","name__orig":"episode","Name":"Episode","name_":"episode","name-":"episode","NAME":"EPISODE","index$":1}, {"active":true,"entity":"episode","key$":"BasicEpisodeFlow","kind":"basic","name":"BasicEpisodeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"episode_ref01"}}],"index$":0}]}, 'Episode', {"GET /episodes":{"protocol":"http","parameters":[{"name":"includeCharacters","in":"query","description":"Include characters in the response.","schema":{"default":"false","type":"string","enum":["false","true"]},"index$":0},{"name":"season","in":"query","description":"The season number.","schema":{"type":"number","nullable":true},"index$":1},{"name":"limit","in":"query","description":"The number of items to return","schema":{"default":10,"type":"number","minimum":1},"index$":2},{"name":"page","in":"query","description":"The page number to return.","schema":{"default":1,"type":"number","minimum":1},"index$":3}]}})
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
  
