package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCharacterEntityFunc func(client *TheOfficeSDK, entopts map[string]any) TheOfficeEntity

var NewEpisodeEntityFunc func(client *TheOfficeSDK, entopts map[string]any) TheOfficeEntity

var NewSeasonEntityFunc func(client *TheOfficeSDK, entopts map[string]any) TheOfficeEntity

