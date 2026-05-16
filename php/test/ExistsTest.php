<?php
declare(strict_types=1);

// TheOffice SDK exists test

require_once __DIR__ . '/../theoffice_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TheOfficeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
