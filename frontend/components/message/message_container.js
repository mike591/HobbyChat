import { connect } from 'react-redux';
import Message from './message';
import { getBoards }  from '../../actions/board_actions';
import { getCurrentUser }  from '../../actions/session_actions';

const mapStateToProps = (state, props) => {
  let board_id = parseInt(props.params.board_id);
  let board_name;

  Object.keys(state.boards).forEach((el) => {
      if (state.boards[el].id === board_id) {
        board_name = el;
      }
  });

  return ({
    board_id: board_id,
    board_name: board_name
  });
};

const mapDispatchToProps = (dispatch) => ({
  getBoards: () => dispatch(getBoards()),
  getCurrentUser: () => dispatch(getCurrentUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
