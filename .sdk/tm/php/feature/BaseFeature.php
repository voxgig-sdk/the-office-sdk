<?php
declare(strict_types=1);

// TheOffice SDK base feature

class TheOfficeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TheOfficeContext $ctx, array $options): void {}
    public function PostConstruct(TheOfficeContext $ctx): void {}
    public function PostConstructEntity(TheOfficeContext $ctx): void {}
    public function SetData(TheOfficeContext $ctx): void {}
    public function GetData(TheOfficeContext $ctx): void {}
    public function GetMatch(TheOfficeContext $ctx): void {}
    public function SetMatch(TheOfficeContext $ctx): void {}
    public function PrePoint(TheOfficeContext $ctx): void {}
    public function PreSpec(TheOfficeContext $ctx): void {}
    public function PreRequest(TheOfficeContext $ctx): void {}
    public function PreResponse(TheOfficeContext $ctx): void {}
    public function PreResult(TheOfficeContext $ctx): void {}
    public function PreDone(TheOfficeContext $ctx): void {}
    public function PreUnexpected(TheOfficeContext $ctx): void {}
}
