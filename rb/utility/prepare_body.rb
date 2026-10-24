# TheOffice SDK utility: prepare_body
require_relative 'media'
module TheOfficeUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return TheOfficeUtilities.raw_body(ctx.reqdata) if TheOfficeUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
