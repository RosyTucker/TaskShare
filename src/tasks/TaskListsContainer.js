import { connect } from 'react-redux';

import { addNewTaskList, cancelAddNewTaskList, updatePartialTaskList, createNewTaskList } from './taskListActions';
import { getMode, getPartialTaskList, getExistingTaskLists } from './taskListSelectors';
import TaskListsPage from './allLists/TaskListsPage';
import routes from '../nav/routes';

const mapStateToProps = state => ({
  mode: getMode(state),
  partialTaskList: getPartialTaskList(state),
  existingTaskLists: getExistingTaskLists(state),
});

const mapActionsToProps = (dispatch, props) => ({
  onAddTaskList: () => dispatch(addNewTaskList()),
  onCancelAddTaskList: () => dispatch(cancelAddNewTaskList()),
  onUpdatePartialTaskList: fields => dispatch(updatePartialTaskList(fields)),
  onCreateNewTaskList: partial => dispatch(createNewTaskList(partial)),
  onSelectTaskList: selectedList => props.navigation.navigate(routes.taskList, { id: selectedList.id }),
});

export default connect(mapStateToProps, mapActionsToProps)(TaskListsPage);
