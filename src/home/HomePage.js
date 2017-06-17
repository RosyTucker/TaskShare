import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AddTaskListModal from './AddTaskListModal';
import { IconButton } from '../libraryCompononts/index';
import modes from './taskListModes';

import strings from '../strings/index';
import { colors, icons } from '../style/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBackground,
  },
  addIcon: {
    marginRight: 16,
  },
});

class Login extends Component {
  componentDidMount() {
    this.props.navigation.setParams({ onAddTaskList: this.props.onAddTaskList });
  }

  render() {
    const { mode, onCancelAddTaskList } = this.props;

    if (mode === modes.addingTask) {
      return (
        <AddTaskListModal onClose={onCancelAddTaskList} />
      );
    }

    return (
      <View style={styles.container}>
        <Text>
          Hello World
        </Text>
      </View>
    );
  }
}

Login.navigationOptions = ({ navigation }) => {
  return {
    title: strings.home.navTitle,
    headerRight: (
      <IconButton
        style={styles.addIcon}
        color="light"
        size="large"
        config={icons.add}
        onPress={() => navigation.state.params.onAddTaskList()}
      />
    ),
  };
};

Login.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired,
  }).isRequired,
  onAddTaskList: PropTypes.func.isRequired,
  onCancelAddTaskList: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(Object.values(modes)).isRequired,
};

export default Login;
