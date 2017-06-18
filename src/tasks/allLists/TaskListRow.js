import React from 'react';
import PropTypes from 'prop-types';

import { Text, ListItem, Body, Left, Right, Icon, H1 } from '../../theme/index';

const styles = {
  task: {
    marginBottom: 5,
  },
  left: {
    flex: 0,
    marginRight: 10,
  },
  numTasksCompleted: {
    marginBottom: 15,
  },
  totalNumTasks: {
    marginLeft: -6,
    marginTop: 22,
  },
  divider: {
    marginLeft: -2,
    marginTop: 5,
    transform: [{ rotate: '45deg' }],
  },
};

const TaskListRow = ({ list, onSelect }) => (
  <ListItem key={list.id} onPress={onSelect}>
    <Left style={styles.left}>
      <Text style={styles.numTasksCompleted}>{list.numTasksCompleted}</Text>
      <H1 style={styles.divider}>/</H1>
      <Text style={styles.totalNumTasks}>{list.tasks.length}</Text>
    </Left>
    <Body>
    <Text style={styles.task}>{list.name}</Text>
    <Text note>{list.createdAt}</Text>
    </Body>
    <Right>
      <Icon name="ios-arrow-forward" />
    </Right>
  </ListItem>
);

TaskListRow.propTypes = {
  list: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    numTasksCompleted: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TaskListRow;
