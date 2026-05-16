<?php
declare(strict_types=1);

// TheOffice SDK utility: prepare_body

class TheOfficePrepareBody
{
    public static function call(TheOfficeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
