<?php

namespace BMCG_Vendor\BernskioldMedia\WP\PluginBase\Commands;

use BMCG_Vendor\Symfony\Component\Console\Input\InputInterface;
use BMCG_Vendor\Symfony\Component\Console\Input\InputOption;
use function BMCG_Vendor\Symfony\Component\String\u;
class RestEndpointCommand extends MakeCommand
{
    protected static $basePath = '/src/Rest/';
    protected static $defaultName = 'make:rest';
    protected static $stubName = 'rest';
    protected function configure()
    {
        parent::configure();
        $this->addOption('namespace', 's', InputOption::VALUE_OPTIONAL, 'The root plugin namespace.', 'NAMESPACE');
    }
    protected function getReplacements(InputInterface $input) : array
    {
        $name = $input->getArgument('name');
        return ['{{ namespace }}' => $input->getOption('namespace') . '\\Rest', '{{ class }}' => u($name)->camel()->title()->toString()];
    }
}
