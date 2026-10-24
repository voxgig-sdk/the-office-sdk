-- TheOffice SDK error

local json = require("dkjson")

local TheOfficeError = {}
TheOfficeError.__index = TheOfficeError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function TheOfficeError.new(code, msg, ctx)
  local self = setmetatable({}, TheOfficeError)
  self.is_sdk_error = true
  self.sdk = "TheOffice"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function TheOfficeError:context()
  return CONTEXT[self]
end


function TheOfficeError:error()
  return self.msg
end


function TheOfficeError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function TheOfficeError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function TheOfficeError:to_json()
  return json.encode(self:to_table())
end


function TheOfficeError:__tostring()
  return self.msg
end


function TheOfficeError.__tojson(self)
  return self:to_json()
end


return TheOfficeError
