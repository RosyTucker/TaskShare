import { connect } from 'react-redux';

import { addNewTaskList, cancelAddNewTaskList } from './taskListActions';
import { getMode } from './taskListSelectors';
import HomePage from './HomePage';

const mapStateToProps = state => ({
  mode: getMode(state),
});

const mapActionsToProps = dispatch => ({
  onAddTaskList: () => dispatch(addNewTaskList()),
  onCancelAddTaskList: () => dispatch(cancelAddNewTaskList()),
});

export default connect(mapStateToProps, mapActionsToProps)(HomePage);
