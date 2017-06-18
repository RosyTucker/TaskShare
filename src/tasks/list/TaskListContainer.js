import { connect } from 'react-redux';

import { getTaskList } from '../taskListSelectors';
import TaskListPage from './TaskListPage';

const mapStateToProps = (state, props) => ({
  taskList: getTaskList(state, props.navigation.state.params.id),
});

const mapActionsToProps = () => ({});

export default connect(mapStateToProps, mapActionsToProps)(TaskListPage);
