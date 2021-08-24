<?php

namespace BMCG_Vendor\BernskioldMedia\WP\PluginBase\Fields;

abstract class FieldGroup
{
    public static function make() : void
    {
        if (!\function_exists('BMCG_Vendor\\acf_add_local_field_group')) {
            return;
        }
        acf_add_local_field_group(static::get_data());
    }
    protected static abstract function get_data() : array;
}
