# TheOffice SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

TheOfficeUtility.registrar = ->(u) {
  u.clean = TheOfficeUtilities::Clean
  u.done = TheOfficeUtilities::Done
  u.make_error = TheOfficeUtilities::MakeError
  u.feature_add = TheOfficeUtilities::FeatureAdd
  u.feature_hook = TheOfficeUtilities::FeatureHook
  u.feature_init = TheOfficeUtilities::FeatureInit
  u.fetcher = TheOfficeUtilities::Fetcher
  u.make_fetch_def = TheOfficeUtilities::MakeFetchDef
  u.make_context = TheOfficeUtilities::MakeContext
  u.make_options = TheOfficeUtilities::MakeOptions
  u.make_request = TheOfficeUtilities::MakeRequest
  u.make_response = TheOfficeUtilities::MakeResponse
  u.make_result = TheOfficeUtilities::MakeResult
  u.make_point = TheOfficeUtilities::MakePoint
  u.make_spec = TheOfficeUtilities::MakeSpec
  u.make_url = TheOfficeUtilities::MakeUrl
  u.param = TheOfficeUtilities::Param
  u.prepare_auth = TheOfficeUtilities::PrepareAuth
  u.prepare_body = TheOfficeUtilities::PrepareBody
  u.prepare_headers = TheOfficeUtilities::PrepareHeaders
  u.prepare_method = TheOfficeUtilities::PrepareMethod
  u.prepare_params = TheOfficeUtilities::PrepareParams
  u.prepare_path = TheOfficeUtilities::PreparePath
  u.prepare_query = TheOfficeUtilities::PrepareQuery
  u.result_basic = TheOfficeUtilities::ResultBasic
  u.result_body = TheOfficeUtilities::ResultBody
  u.result_headers = TheOfficeUtilities::ResultHeaders
  u.transform_request = TheOfficeUtilities::TransformRequest
  u.transform_response = TheOfficeUtilities::TransformResponse
}
