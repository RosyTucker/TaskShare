import { connect } from 'react-redux';

import TaskListPage from './TaskListPage';

import { addNewTask, cancelAddNewTask, updatePartialTask, createNewTask, updateExistingTask } from '../taskListActions';
import { getMode, getPartialTask, getFormattedTaskList } from '../taskListSelectors';

const mapStateToProps = (state, props) => ({
  mode: getMode(state),
  taskList: getFormattedTaskList(state, props.navigation.state.params.id),
  partialTask: getPartialTask(state),
});

const mapDispatchToProps = dispatch => ({
  onAddTask: () => dispatch(addNewTask()),
  onCancelAddTask: () => dispatch(cancelAddNewTask()),
  onUpdatePartialTask: fields => dispatch(updatePartialTask(fields)),
  onUpdateExistingTask: (listId, taskId, fields) => dispatch(updateExistingTask({ listId, taskId, fields })),
  onCreateNewTask: (listId, task) => dispatch(createNewTask({ listId, task })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListPage);
