<?php
declare(strict_types=1);

// TheOffice SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

TheOfficeUtility::setRegistrar(function (TheOfficeUtility $u): void {
    $u->clean = [TheOfficeClean::class, 'call'];
    $u->done = [TheOfficeDone::class, 'call'];
    $u->make_error = [TheOfficeMakeError::class, 'call'];
    $u->feature_add = [TheOfficeFeatureAdd::class, 'call'];
    $u->feature_hook = [TheOfficeFeatureHook::class, 'call'];
    $u->feature_init = [TheOfficeFeatureInit::class, 'call'];
    $u->fetcher = [TheOfficeFetcher::class, 'call'];
    $u->make_fetch_def = [TheOfficeMakeFetchDef::class, 'call'];
    $u->make_context = [TheOfficeMakeContext::class, 'call'];
    $u->make_options = [TheOfficeMakeOptions::class, 'call'];
    $u->make_request = [TheOfficeMakeRequest::class, 'call'];
    $u->make_response = [TheOfficeMakeResponse::class, 'call'];
    $u->make_result = [TheOfficeMakeResult::class, 'call'];
    $u->make_point = [TheOfficeMakePoint::class, 'call'];
    $u->make_spec = [TheOfficeMakeSpec::class, 'call'];
    $u->make_url = [TheOfficeMakeUrl::class, 'call'];
    $u->param = [TheOfficeParam::class, 'call'];
    $u->prepare_auth = [TheOfficePrepareAuth::class, 'call'];
    $u->prepare_body = [TheOfficePrepareBody::class, 'call'];
    $u->prepare_headers = [TheOfficePrepareHeaders::class, 'call'];
    $u->prepare_method = [TheOfficePrepareMethod::class, 'call'];
    $u->prepare_params = [TheOfficePrepareParams::class, 'call'];
    $u->prepare_path = [TheOfficePreparePath::class, 'call'];
    $u->prepare_query = [TheOfficePrepareQuery::class, 'call'];
    $u->result_basic = [TheOfficeResultBasic::class, 'call'];
    $u->result_body = [TheOfficeResultBody::class, 'call'];
    $u->result_headers = [TheOfficeResultHeaders::class, 'call'];
    $u->transform_request = [TheOfficeTransformRequest::class, 'call'];
    $u->transform_response = [TheOfficeTransformResponse::class, 'call'];
});
