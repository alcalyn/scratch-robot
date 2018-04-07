Blockly.JavaScript['move_forward'] = function (block) {
  return 'Robot_forward();\n';
};

Blockly.JavaScript['move_backward'] = function (block) {
  return 'Robot_backward();\n';
};

Blockly.JavaScript['turn'] = function (block) {
  if (block.getFieldValue('ROTATION') === 'LEFT') {
    return 'Robot_turnLeft();\n';
  } else {
    return 'Robot_turnRight();\n';
  }
};

Blockly.JavaScript['wait_seconds'] = function (block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  return 'waitForSeconds(' + seconds + ');\n';
};
