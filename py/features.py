# TheOffice SDK feature factory

from feature.base_feature import TheOfficeBaseFeature
from feature.test_feature import TheOfficeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: TheOfficeBaseFeature(),
        "test": lambda: TheOfficeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
