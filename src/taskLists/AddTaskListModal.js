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
} from '../theme';
import strings from '../strings';

const AddTaskListModal = ({ onClose }) => (
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
      <Content>
        <Form>
          <Item>
            <Input placeholder="Task List Name" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </Content>
    </Container>
  </Modal>
);

AddTaskListModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddTaskListModal;
