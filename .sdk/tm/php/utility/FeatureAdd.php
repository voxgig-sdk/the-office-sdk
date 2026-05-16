<?php
declare(strict_types=1);

// TheOffice SDK utility: feature_add

class TheOfficeFeatureAdd
{
    public static function call(TheOfficeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
