/* eslint-disable no-console */
// import { createSelector } from 'reselect';
const { createSelector } = require('reselect');

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

const selector = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    console.log('Debug: 01 [ computing selector ]');
    switch (visibilityFilter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter((t) => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  },
);

const todos = [
  { value: 42, completed: false },
  { value: 43, completed: true },
];

const state1 = {
  todos,
  visibilityFilter: 'SHOW_ACTIVE',
  somethingElse: 42,
};

console.log(selector(state1));
console.log(selector(state1));


const state2 = {
  ...state1,
  somethingElse: 43,
  visibilityFilter: 'SHOW_ALL',
};

console.log(selector(state2));

state2.visibilityFilter = 'SHOW_ACTIVE'; // does not trigger refresh

console.log(selector(state2));
