import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTaskListModal from './AddTaskListModal';
import { Container, Content, Button, Icon, List } from '../../theme/index';
import modes from '../taskListModes';
import TaskListRow from './TaskListRow';

import strings from '../../strings/index';

class TaskLists extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: strings.home.navBarTitle,
    headerRight: (
      <Button iconRight light transparent onPress={() => navigation.state.params.onAddTaskList()}>
        <Icon name="add" />
      </Button>
    ),
  });

  componentWillMount() {
    this.props.navigation.setParams({ onAddTaskList: this.props.onAddTaskList });
  }

  render() {
    const {
      mode,
      onCancelAddTaskList,
      onUpdatePartialTaskList,
      onCreateNewTaskList,
      partialTaskList,
      existingTaskLists,
      onSelectTaskList,
    } = this.props;

    if (mode === modes.addingTaskList) {
      return (
        <AddTaskListModal
          onClose={onCancelAddTaskList}
          onUpdate={onUpdatePartialTaskList}
          onCreate={onCreateNewTaskList}
          partialTaskList={partialTaskList}
        />
      );
    }

    return (
      <Container>
        <Content>
          <List
            dataArray={existingTaskLists}
            renderRow={list => (
              <TaskListRow key={list.id} list={list} onSelect={() => onSelectTaskList(list)} />
            )}
          />
        </Content>
      </Container>
    );
  }
}

TaskLists.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  onAddTaskList: PropTypes.func.isRequired,
  onCancelAddTaskList: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(Object.values(modes)).isRequired,
  onUpdatePartialTaskList: PropTypes.func.isRequired,
  onCreateNewTaskList: PropTypes.func.isRequired,
  onSelectTaskList: PropTypes.func.isRequired,
  partialTaskList: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  existingTaskLists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      numTasksCompleted: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TaskLists;
