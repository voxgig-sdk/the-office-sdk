<?php
declare(strict_types=1);

// TheOffice SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class TheOfficeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new TheOfficeBaseFeature();
            case "test":
                return new TheOfficeTestFeature();
            default:
                return new TheOfficeBaseFeature();
        }
    }
}
