# TheOffice SDK utility: make_context
require_relative '../core/context'
module TheOfficeUtilities
  MakeContext = ->(ctxmap, basectx) {
    TheOfficeContext.new(ctxmap, basectx)
  }
end
