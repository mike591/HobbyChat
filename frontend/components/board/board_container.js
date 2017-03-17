import {connect} from 'react-redux';
import Board from './board';
import { getBoards }  from '../../actions/board_actions';
import { getCurrentUser }  from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  boards: state.boards,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  getBoards: () => dispatch(getBoards()),
  getCurrentUser: () => dispatch(getCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
