
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TheOfficeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TheOfficeSDK.test()
    equal(null !== testsdk, true)
  })

})
