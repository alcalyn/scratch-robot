<?php

namespace App\Topic;

use Ratchet\Wamp\WampConnection;
use Eole\Sandstone\Websocket\Topic;

class RobotTopic extends Topic
{
    /**
     * Broadcast message to each subscribing client.
     *
     * {@InheritDoc}
     */
    public function onPublish(WampConnection $conn, $topic, $event)
    {
        echo 'order: ', $event, PHP_EOL;
        // @TODO
    }
}
