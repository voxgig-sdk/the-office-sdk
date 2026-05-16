-- TheOffice SDK error

local TheOfficeError = {}
TheOfficeError.__index = TheOfficeError


function TheOfficeError.new(code, msg, ctx)
  local self = setmetatable({}, TheOfficeError)
  self.is_sdk_error = true
  self.sdk = "TheOffice"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TheOfficeError:error()
  return self.msg
end


function TheOfficeError:__tostring()
  return self.msg
end


return TheOfficeError
