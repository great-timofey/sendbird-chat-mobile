import { OPEN_MODAL_MOVIE, CLOSE_MODAL_MOVIE } from '../actions/modalMovie';

const INITIAL_STATE = {
  isOpen: false,
  item: {},
};

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL_MOVIE:
      return { isOpen: action.open, item: action.item };
    case CLOSE_MODAL_MOVIE:
      return { isOpen: action.open, item: {} };
    default:
      return state;
  }
};

export default modal;
