<?php
declare(strict_types=1);

// TheOffice SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TheOfficeMakeContext
{
    public static function call(array $ctxmap, ?TheOfficeContext $basectx): TheOfficeContext
    {
        return new TheOfficeContext($ctxmap, $basectx);
    }
}
