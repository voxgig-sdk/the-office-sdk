
import { Context } from './Context'


class TheOfficeError extends Error {

  isTheOfficeError = true

  sdk = 'TheOffice'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  TheOfficeError
}

