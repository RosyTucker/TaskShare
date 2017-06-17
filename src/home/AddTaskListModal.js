import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';

import { KeyboardController, NavBar } from '../libraryCompononts/index';
import strings from '../strings/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AddTaskListModal = ({ onClose }) => (
  <KeyboardController withNavBar>
    <Modal animationType="slide">
      <View style={styles.container}>
        <NavBar
          title={strings.addTaskListModal.navBarTitle}
          onBack={onClose}
        />
        <Text>Hello</Text>
      </View>
    </Modal>
  </KeyboardController>
);

AddTaskListModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddTaskListModal;
