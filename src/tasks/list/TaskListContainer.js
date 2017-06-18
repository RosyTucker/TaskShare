import { connect } from 'react-redux';

import TaskListPage from './TaskListPage';

import { addNewTask, cancelAddNewTask, updatePartialTask, createNewTask } from '../taskListActions';
import { getMode, getPartialTask, getTaskList } from '../taskListSelectors';

const mapStateToProps = (state, props) => ({
  mode: getMode(state),
  taskList: getTaskList(state, props.navigation.state.params.id),
  partialTask: getPartialTask(state),
});

const mapActionsToProps = dispatch => ({
  onAddTask: () => dispatch(addNewTask()),
  onCancelAddTask: () => dispatch(cancelAddNewTask()),
  onUpdatePartialTask: fields => dispatch(updatePartialTask(fields)),
  onCreateNewTask: (listId, task) => dispatch(createNewTask({ listId, task })),
});

export default connect(mapStateToProps, mapActionsToProps)(TaskListPage);
