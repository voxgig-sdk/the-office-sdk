# TheOffice SDK feature factory

from theoffice_sdk.feature.base_feature import TheOfficeBaseFeature
from theoffice_sdk.feature.test_feature import TheOfficeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TheOfficeBaseFeature(),
        "test": lambda: TheOfficeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
