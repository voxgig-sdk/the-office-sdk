<?php
declare(strict_types=1);

// TheOffice SDK utility: result_body

class TheOfficeResultBody
{
    public static function call(TheOfficeContext $ctx): ?TheOfficeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
