

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


describe('CharacterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when THE_OFFICE_TEST_LIVE=TRUE.
  afterEach(liveDelay('THE_OFFICE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TheOfficeSDK.test()
    const ent = testsdk.Character()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.THE_OFFICE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'character.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"actor","req":true,"short":"The actor who played the character.","type":"`$STRING`","index$":0},{"active":true,"name":"episodes","req":false,"short":"List of episodes the character appeared in.","type":"`$ARRAY`","index$":1},{"active":true,"name":"firstAppearance","req":true,"short":"Title of the episode the character first appeared in.","type":"`$STRING`","index$":2},{"active":true,"name":"gender","req":true,"short":"The character's gender.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"Unique identifier for the character.","type":"`$NUMBER`","index$":4},{"active":true,"name":"job","req":true,"short":"List of jobs the character has.","type":"`$ARRAY`","index$":5},{"active":true,"name":"lastAppearance","req":true,"short":"Title of the last episode the character appeared in.","type":"`$STRING`","index$":6},{"active":true,"name":"marital","req":true,"short":"The character's marital status.","type":"`$STRING`","index$":7},{"active":true,"name":"name","req":true,"short":"The character's name.","type":"`$STRING`","index$":8},{"active":true,"name":"workplace","req":true,"short":"List of locations a character has worked at.","type":"`$ARRAY`","index$":9}],"id":{"field":"id","name":"id"},"name":"character","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"false","kind":"query","name":"include_episode","orig":"include_episode","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":10,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$NUMBER`","index$":2}]},"contract":{"id":"GET /characters","json":"{\"operationId\":\"characters\",\"parameters\":[{\"description\":\"Include episodes in the response.\",\"in\":\"query\",\"name\":\"includeEpisodes\",\"schema\":{\"default\":\"false\",\"enum\":[\"false\",\"true\"],\"type\":\"string\"}},{\"description\":\"The number of items to return\",\"in\":\"query\",\"name\":\"limit\",\"schema\":{\"default\":10,\"minimum\":1,\"type\":\"number\"}},{\"description\":\"The page number to return.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"currentPage\":{\"description\":\"The current page.\",\"type\":\"number\"},\"isFirstPage\":{\"description\":\"If the page is the first page available.\",\"type\":\"boolean\"},\"isLastPage\":{\"description\":\"If the page is the last page available.\",\"type\":\"boolean\"},\"nextPage\":{\"description\":\"The next page.\",\"nullable\":true,\"type\":\"number\"},\"pageCount\":{\"description\":\"The total number of pages.\",\"type\":\"number\"},\"previousPage\":{\"description\":\"The previous page.\",\"nullable\":true,\"type\":\"number\"},\"totalCount\":{\"description\":\"The total number of items.\",\"type\":\"number\"}},\"required\":[\"isFirstPage\",\"isLastPage\",\"currentPage\",\"nextPage\",\"pageCount\",\"previousPage\",\"totalCount\"],\"type\":\"object\"},\"results\":{\"items\":{\"properties\":{\"actor\":{\"description\":\"The actor who played the character.\",\"nullable\":true,\"type\":\"string\"},\"episodes\":{\"description\":\"List of episodes the character appeared in. Only available if `includeEpisodes=true`.\",\"items\":{\"properties\":{\"episode\":{\"description\":\"The episode the character appeared in.\",\"properties\":{\"id\":{\"description\":\"Unique identifier for the episode.\",\"type\":\"number\"},\"title\":{\"description\":\"Title of the episode.\",\"type\":\"string\"}},\"required\":[\"id\",\"title\"],\"type\":\"object\"},\"type\":{\"description\":\"The character's role in the episode.\",\"enum\":[\"RECURRING\",\"GUEST\",\"MAIN\"],\"type\":\"string\"}},\"required\":[\"type\",\"episode\"],\"type\":\"object\"},\"type\":\"array\"},\"firstAppearance\":{\"description\":\"Title of the episode the character first appeared in.\",\"nullable\":true,\"type\":\"string\"},\"gender\":{\"description\":\"The character's gender.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character.\",\"type\":\"number\"},\"job\":{\"description\":\"List of jobs the character has.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"lastAppearance\":{\"description\":\"Title of the last episode the character appeared in.\",\"nullable\":true,\"type\":\"string\"},\"marital\":{\"description\":\"The character's marital status.\",\"nullable\":true,\"type\":\"string\"},\"name\":{\"description\":\"The character's name.\",\"type\":\"string\"},\"workplace\":{\"description\":\"List of locations a character has worked at.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"id\",\"name\",\"gender\",\"marital\",\"job\",\"workplace\",\"firstAppearance\",\"lastAppearance\",\"actor\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"results\",\"meta\"],\"type\":\"object\"}}},\"description\":\"200\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/characters","segments":[{"lit":"characters"}],"select":{"exist":["include_episode","limit","page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$NUMBER`","index$":0}],"query":[{"active":true,"example":"false","kind":"query","name":"include_episode","orig":"include_episode","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /character/{id}","json":"{\"operationId\":\"character\",\"parameters\":[{\"description\":\"The character's unique identifier.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"nullable\":true,\"type\":\"number\"}},{\"description\":\"Include episodes in the response.\",\"in\":\"query\",\"name\":\"includeEpisodes\",\"schema\":{\"default\":\"false\",\"enum\":[\"false\",\"true\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"actor\":{\"description\":\"The actor who played the character.\",\"nullable\":true,\"type\":\"string\"},\"firstAppearance\":{\"description\":\"Title of the episode the character first appeared in.\",\"nullable\":true,\"type\":\"string\"},\"gender\":{\"description\":\"The character's gender.\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the character.\",\"type\":\"number\"},\"job\":{\"description\":\"List of jobs the character has.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"lastAppearance\":{\"description\":\"Title of the last episode the character appeared in.\",\"nullable\":true,\"type\":\"string\"},\"marital\":{\"description\":\"The character's marital status.\",\"nullable\":true,\"type\":\"string\"},\"name\":{\"description\":\"The character's name.\",\"type\":\"string\"},\"workplace\":{\"description\":\"List of locations a character has worked at.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"id\",\"name\",\"gender\",\"marital\",\"job\",\"workplace\",\"firstAppearance\",\"lastAppearance\",\"actor\"],\"type\":\"object\"}}},\"description\":\"200\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"404\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/character/{id}","segments":[{"lit":"character"},{"var":"id"}],"select":{"exist":["id","include_episode"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"character","name__orig":"character","Name":"Character","name_":"character","name-":"character","NAME":"CHARACTER","index$":0}, {"active":true,"entity":"character","key$":"BasicCharacterFlow","kind":"basic","name":"BasicCharacterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"character_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"character_ref01","srcdatavar":"character_ref01_data","suffix":"_dt0"},"match":{"id":"character01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-character_ref01"}}],"index$":1}]}, 'Character')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let character_ref01_data = Object.values(setup.data.existing.character)[0] as any

    // LIST
    const character_ref01_ent = client.Character()
    const character_ref01_match: any = {}

    const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e: any) => e.data())


    // LOAD
    const character_ref01_match_dt0: any = {}
    character_ref01_match_dt0.id = character_ref01_data.id
    const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data()
    assert(character_ref01_data_dt0.id === character_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/character/CharacterTestData.json')

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
    ['character01','character02','character03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'THE_OFFICE_TEST_CHARACTER_ENTID': idmap,
    'THE_OFFICE_TEST_LIVE': 'FALSE',
    'THE_OFFICE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['THE_OFFICE_TEST_CHARACTER_ENTID']

  const live = 'TRUE' === env.THE_OFFICE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['THE_OFFICE_TEST_CHARACTER_ENTID']
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
  
