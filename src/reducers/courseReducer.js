import * as types from '../actions/actionTypes';

// Set inital state as an empty array by default.
// If an initial state is provided with the configureStore function
// then then that state will get passed here.
// Use inital state with server side rendered apps.
export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
