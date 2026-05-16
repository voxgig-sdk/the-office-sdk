# TheOffice SDK exists test

require "minitest/autorun"
require_relative "../TheOffice_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = TheOfficeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
