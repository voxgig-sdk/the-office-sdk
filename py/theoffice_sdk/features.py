# TheOffice SDK feature factory

from theoffice_sdk.feature.base_feature import TheOfficeBaseFeature
from theoffice_sdk.feature.ratelimit_feature import TheOfficeRatelimitFeature
from theoffice_sdk.feature.retry_feature import TheOfficeRetryFeature
from theoffice_sdk.feature.test_feature import TheOfficeTestFeature
from theoffice_sdk.feature.timeout_feature import TheOfficeTimeoutFeature


_FEATURES = {
    "base": lambda: TheOfficeBaseFeature(),
    "ratelimit": lambda: TheOfficeRatelimitFeature(),
    "retry": lambda: TheOfficeRetryFeature(),
    "test": lambda: TheOfficeTestFeature(),
    "timeout": lambda: TheOfficeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
