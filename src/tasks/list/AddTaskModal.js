import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
} from 'react-native';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Header,
  Button,
  Body,
  Left,
  Right,
  Title,
  Icon,
  Text,
} from '../../theme/index';
import strings from '../../strings/index';

const styles = {
  content: {
    padding: 20,
  },
  createButton: {
    marginTop: 20,
  },
};

const AddTaskModal = ({ partialTask, onClose, onUpdate, onCreate }) => (
  <Modal animationType="slide">
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={onClose}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>{strings.addTaskModal.navBarTitle}</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <Form>
          <Item>
            <Input
              value={partialTask.description}
              onChangeText={description => onUpdate({ description })}
              placeholder={strings.addTaskModal.taskDescriptionPlaceholder}
            />
          </Item>
          <Button primary full style={styles.createButton} onPress={() => onCreate(partialTask)}>
            <Text>{strings.addTaskModal.createTaskButtonTitle}</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  </Modal>
);

AddTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  partialTask: PropTypes.shape({
    description: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
  }).isRequired,
};

export default AddTaskModal;
