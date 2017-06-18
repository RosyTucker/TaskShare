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
} from '../theme';
import strings from '../strings';

const styles = {
  content: {
    padding: 20,
  },
  createButton: {
    marginTop: 20,
  },
};

const AddTaskListModal = ({ partialTaskList, onClose, onUpdate, onCreate }) => (
  <Modal animationType="slide">
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={onClose}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>{strings.addTaskListModal.navBarTitle}</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        <Form>
          <Item>
            <Input
              value={partialTaskList.name}
              onChangeText={name => onUpdate({ name })}
              placeholder={strings.addTaskListModal.taskListNamePlaceholder}
            />
          </Item>
          <Button primary full style={styles.createButton} onPress={() => onCreate(partialTaskList)}>
            <Text>{strings.addTaskListModal.createTaskListButtonTitle}</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  </Modal>
);

AddTaskListModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  partialTaskList: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddTaskListModal;
