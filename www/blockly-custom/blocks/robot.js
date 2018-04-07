Blockly.defineBlocksWithJsonArray([
  {
    "type": "move_forward",
    "message0": '%{BKY_ROBOT_FORWARD}',
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_PROCEDURES_HUE}",
    "tooltip": "%{BKY_ROBOT_FORWARD_TOOLTIP}"
  },
  {
    "type": "move_backward",
    "message0": '%{BKY_ROBOT_BACKWARD}',
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_PROCEDURES_HUE}",
    "tooltip": "%{BKY_ROBOT_BACKWARD_TOOLTIP}"
  },
  {
    "type": "turn",
    "message0": "%{BKY_ROBOT_TURN}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "ROTATION",
        "options": [
          ["%{BKY_ROBOT_TURN_LEFT}", "LEFT"],
          ["%{BKY_ROBOT_TURN_RIGHT}", "RIGHT"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_PROCEDURES_HUE}",
    "tooltip": "%{BKY_ROBOT_TURN_TOOLTIP}"
  },
  {
    "type": "wait_seconds",
    "message0": "%{BKY_ROBOT_WAIT}",
    "args0": [
      {
        "type": "field_number",
        "name": "SECONDS",
        "min": 0,
        "max": 600,
        "value": 1
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_PROCEDURES_HUE}",
    "tooltip": "%{BKY_ROBOT_WAIT_TOOLTIP}"
  }
]);
