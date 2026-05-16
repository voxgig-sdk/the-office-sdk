package = "voxgig-sdk-the-office"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/the-office-sdk.git"
}
description = {
  summary = "TheOffice SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["the-office_sdk"] = "the-office_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
