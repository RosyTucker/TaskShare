import React from 'react';
import PropTypes from 'prop-types';

import { Text, ListItem, Body, Left, Right, CheckBox } from '../../theme/index';

const styles = {
  left: {
    flex: 0,
    marginRight: 10,
  },
};

const TaskRow = ({ task, onToggle }) => (
  <ListItem key={task.id}>
    <Left style={styles.left}>
      <CheckBox
        checked={task.isComplete}
        onPress={onToggle}
      />
    </Left>
    <Body>
      <Text style={styles.task}>{task.description}</Text>
    </Body>
    <Right />
  </ListItem>
);

TaskRow.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TaskRow;
