<?php

namespace App\Topic;

use Ratchet\Wamp\WampConnection;
use Eole\Sandstone\Websocket\Topic;
use Drop\RobotApi\Api;

class RobotTopic extends Topic
{
    /**
     * Broadcast message to each subscribing client.
     *
     * {@InheritDoc}
     */
    public function onPublish(WampConnection $conn, $topic, $event)
    {
        $api = new Api();

        switch ($event) {
            case 'forward':
                echo 'Lets go forward...', PHP_EOL;
                $api->forward();
                $api->sleepMoveTime();
                break;

            case 'backward':
                echo 'Lets go backward...', PHP_EOL;
                $api->backward();
                $api->sleepMoveTime();
                break;

            case 'left':
                echo 'Lets turn left...', PHP_EOL;
                $api->left();
                $api->sleepRotateTime();
                break;

            case 'right':
                echo 'Lets turn right...', PHP_EOL;
                $api->right();
                $api->sleepRotateTime();
                break;

            default:
                echo 'unknown action: ', $event, PHP_EOL;
                return;
        }

        $api->stop();
        echo 'Ok, Im now stopped.', PHP_EOL;

        $this->broadcast([
            'message' => 'done',
        ]);
    }
}
