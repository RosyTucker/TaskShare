import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddTaskListModal from './AddTaskListModal';
import { Container, Content, Title, Text, Button, Icon } from '../theme';
import modes from './taskListModes';

import strings from '../strings/index';

class TaskLists extends Component {
  componentDidMount() {
    this.props.navigation.setParams({ onAddTaskList: this.props.onAddTaskList });
  }

  render() {
    const { mode, onCancelAddTaskList } = this.props;

    if (mode === modes.addingTask) return (<AddTaskListModal onClose={onCancelAddTaskList} />);

    return (
      <Container>
        <Content>
          <Text>
            Hello World
          </Text>
        </Content>
      </Container>
    );
  }
}

TaskLists.navigationOptions = ({ navigation }) => ({
  title: (<Title>{strings.home.navBarTitle}</Title>),
  headerRight: (
    <Button iconRight light transparent onPress={() => navigation.state.params.onAddTaskList()}>
      <Icon name="add" />
    </Button>
  ),
});

TaskLists.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  onAddTaskList: PropTypes.func.isRequired,
  onCancelAddTaskList: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(Object.values(modes)).isRequired,
};

export default TaskLists;
