package voxgigtheofficesdk

import (
	"github.com/voxgig-sdk/the-office-sdk/go/core"
	"github.com/voxgig-sdk/the-office-sdk/go/entity"
	"github.com/voxgig-sdk/the-office-sdk/go/feature"
	_ "github.com/voxgig-sdk/the-office-sdk/go/utility"
)

// Type aliases preserve external API.
type TheOfficeSDK = core.TheOfficeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TheOfficeEntity = core.TheOfficeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TheOfficeError = core.TheOfficeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewCharacterEntityFunc = func(client *core.TheOfficeSDK, entopts map[string]any) core.TheOfficeEntity {
		return entity.NewCharacterEntity(client, entopts)
	}
	core.NewEpisodeEntityFunc = func(client *core.TheOfficeSDK, entopts map[string]any) core.TheOfficeEntity {
		return entity.NewEpisodeEntity(client, entopts)
	}
	core.NewSeasonEntityFunc = func(client *core.TheOfficeSDK, entopts map[string]any) core.TheOfficeEntity {
		return entity.NewSeasonEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTheOfficeSDK = core.NewTheOfficeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTheOfficeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TheOfficeSDK  { return NewTheOfficeSDK(nil) }
func Test() *TheOfficeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
