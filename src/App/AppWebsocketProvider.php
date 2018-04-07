<?php

namespace App;

use Pimple\ServiceProviderInterface;
use Pimple\Container;
use App\Topic\ChatTopic;
use App\Topic\RobotTopic;

class AppWebsocketProvider implements ServiceProviderInterface
{
    /**
     * {@InheritDoc}
     */
    public function register(Container $app)
    {
        $app->topic('chat', function ($topicPattern) {
            return new ChatTopic($topicPattern);
        });

        $app->topic('robot', function ($topicPattern) {
            return new RobotTopic($topicPattern);
        });
    }
}
