# TheOffice SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module TheOfficeFeatures
  def self.make_feature(name)
    case name
    when "base"
      TheOfficeBaseFeature.new
    when "test"
      TheOfficeTestFeature.new
    else
      TheOfficeBaseFeature.new
    end
  end
end
