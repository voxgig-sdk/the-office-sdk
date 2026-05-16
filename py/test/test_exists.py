# ProjectName SDK exists test

import pytest
from theoffice_sdk import TheOfficeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TheOfficeSDK.test(None, None)
        assert testsdk is not None
