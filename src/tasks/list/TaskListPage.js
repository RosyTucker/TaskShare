import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, List, Button, Icon } from '../../theme/index';
import TaskRow from './TaskRow';
import modes from '../taskListModes';
import AddTaskModal from './AddTaskModal';

class TaskListPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.navBarTitle,
    headerRight: (
      <Button iconRight light transparent onPress={() => navigation.state.params.onAddTask()}>
        <Icon name="add" />
      </Button>
    ),
  });

  componentWillMount() {
    this.props.navigation.setParams({
      navBarTitle: this.props.taskList.name,
      onAddTask: this.props.onAddTask,
    });
  }

  render() {
    const {
      taskList,
      mode,
      onCancelAddTask,
      onUpdatePartialTask,
      onCreateNewTask,
      partialTask,
    } = this.props;

    if (mode === modes.addingTask) {
      return (
        <AddTaskModal
          onClose={onCancelAddTask}
          onUpdate={onUpdatePartialTask}
          onCreate={() => onCreateNewTask(taskList.id, partialTask)}
          partialTask={partialTask}
        />
      );
    }

    return (
      <Container>
        <Content>
          <List
            dataArray={taskList.tasks}
            renderRow={task => (
              <TaskRow key={task.id} task={task} />
            )}
          />
        </Content>
      </Container>
    );
  }
}

TaskListPage.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  taskList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    numTasksCompleted: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  onAddTask: PropTypes.func.isRequired,
  onCancelAddTask: PropTypes.func.isRequired,
  onUpdatePartialTask: PropTypes.func.isRequired,
  onCreateNewTask: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(Object.values(modes)).isRequired,
  partialTask: PropTypes.shape({
    description: PropTypes.string.isRequired,
    icComplete: PropTypes.bool,
  }).isRequired,
};

export default TaskListPage;
