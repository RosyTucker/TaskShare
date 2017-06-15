import { connect } from 'react-redux';

import { addTaskList } from './taskListActions';
import HomePage from './HomePage';

const mapStateToProps = () => ({});

const mapActionsToProps = dispatch => ({
  onAddTaskList: () => dispatch(addTaskList()),
});

export default connect(mapStateToProps, mapActionsToProps)(HomePage);
