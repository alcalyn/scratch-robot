<?php

return [
    'websocket' => [
        'server' => [
            'bind' => '0.0.0.0',
            'port' => 8089,
        ],
    ],
    'push' => [
        'enabled' => true,
        'server' => [
            'bind' => '0.0.0.0',
            'host' => 'websocket-server',
            'port' => 5555,
        ],
    ],
    'cors' => [
        'cors.allowOrigin' => '*',
    ],
];
