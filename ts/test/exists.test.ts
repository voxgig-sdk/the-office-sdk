
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TheOfficeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TheOfficeSDK.test()
    equal(testsdk instanceof TheOfficeSDK, true,
      'TheOfficeSDK.test() must return a client synchronously')
  })

})
