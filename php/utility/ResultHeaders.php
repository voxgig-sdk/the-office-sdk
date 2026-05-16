<?php
declare(strict_types=1);

// TheOffice SDK utility: result_headers

class TheOfficeResultHeaders
{
    public static function call(TheOfficeContext $ctx): ?TheOfficeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
