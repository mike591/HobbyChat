import {connect} from 'react-redux';
import Board from './board';
import { getBoards }  from '../../actions/board_actions';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  getBoards: () => dispatch(getCats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
