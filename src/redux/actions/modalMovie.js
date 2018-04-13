export const OPEN_MODAL_MOVIE = 'OPEN_MODAL_MOVIE';
export const CLOSE_MODAL_MOVIE = 'CLOSE_MODAL_MOVIE';

export const openModalMovie = item => ({
  type: OPEN_MODAL_MOVIE,
  open: true,
  item,
});

export const closeModalMovie = () => ({
  type: CLOSE_MODAL_MOVIE,
  open: false,
  item: {},
});
