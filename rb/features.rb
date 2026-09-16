# TheOffice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module TheOfficeFeatures
  def self.make_feature(name)
    case name
    when "base"
      TheOfficeBaseFeature.new
    when "ratelimit"
      TheOfficeRatelimitFeature.new
    when "retry"
      TheOfficeRetryFeature.new
    when "test"
      TheOfficeTestFeature.new
    when "timeout"
      TheOfficeTimeoutFeature.new
    else
      TheOfficeBaseFeature.new
    end
  end
end
