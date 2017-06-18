import React from 'react';
import PropTypes from 'prop-types';

import { Text, ListItem, Body } from '../../theme/index';

const styles = {
  task: {
    marginBottom: 5,
  },
  left: {
    flex: 0,
    marginRight: 10,
  },
};

const TaskRow = ({ task }) => (
  <ListItem key={task.id}>
    <Body>
      <Text style={styles.task}>{task.description}</Text>
    </Body>
  </ListItem>
);

TaskRow.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskRow;
