import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Content, List, Text } from '../theme';
import TaskRow from './TaskRow';


class TaskListPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.navBarTitle,
  });

  componentWillMount() {
    this.props.navigation.setParams({ navBarTitle: this.props.taskList.name });
  }

  render() {
    const {
      taskList,
    } = this.props;

    return (
      <Container>
        <Content>
          <Text> Hello </Text>
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
};

export default TaskListPage;
