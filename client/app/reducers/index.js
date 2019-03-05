/*
 * Combines together all reducers to save old one
 * object to your store.
 */
import { combineReducers } from 'redux';
// import { getCounters, selectedCounter } from './CountersReducer';
import canvas from './CanvasReducer';
// I want to refer to counters as "counters" so that's why
// it's spelled this way. Adding another reducer? Add it below
// on a new line.

export default combineReducers({
  canvas,
});

// const allReducers = combineReducers({
//   counters: getCounters,
//   selectedCounter: selectedCounter,
// });

// export default allReducers;
