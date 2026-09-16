

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


describe('SeasonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when THE_OFFICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('THE_OFFICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TheOfficeSDK.test()
    const ent = testsdk.Season()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.THE_OFFICE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'season.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"endDate","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"id","req":true,"type":"`$NUMBER`","index$":1},{"active":true,"name":"number","req":true,"type":"`$NUMBER`","index$":2},{"active":true,"name":"startDate","req":true,"type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"season","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /seasons","json":"{\"operationId\":\"seasons\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"endDate\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"number\":{\"type\":\"number\"},\"startDate\":{\"type\":\"string\"}},\"required\":[\"id\",\"number\",\"startDate\",\"endDate\"],\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"200\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/seasons","segments":[{"lit":"seasons"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"season","name__orig":"season","Name":"Season","name_":"season","name-":"season","NAME":"SEASON","index$":2}, {"active":true,"entity":"season","key$":"BasicSeasonFlow","kind":"basic","name":"BasicSeasonFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"season_ref01"}}],"index$":0}]}, 'Season')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let season_ref01_data = Object.values(setup.data.existing.season)[0] as any

    // LIST
    const season_ref01_ent = client.Season()
    const season_ref01_match: any = {}

    const season_ref01_list = (await season_ref01_ent.list(season_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/season/SeasonTestData.json')

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
    ['season01','season02','season03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'THE_OFFICE_TEST_SEASON_ENTID': idmap,
    'THE_OFFICE_TEST_LIVE': 'FALSE',
    'THE_OFFICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['THE_OFFICE_TEST_SEASON_ENTID']

  const live = 'TRUE' === env.THE_OFFICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['THE_OFFICE_TEST_SEASON_ENTID']
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
  
