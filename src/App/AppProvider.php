<?php

namespace App;

use Pimple\ServiceProviderInterface;
use Pimple\Container;

class AppProvider implements ServiceProviderInterface
{
    /**
     * {@InheritDoc}
     */
    public function register(Container $app)
    {
        $app['serializer.builder']
            ->addMetadataDir($app['project.root'].'/src/App/Resources/serializer')
        ;
    }
}
