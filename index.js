/* eslint-disable no-console */
// import { createSelector } from 'reselect';
const { createSelector } = require('reselect');

const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

const selector = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    console.log('Debug: 01');
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

let state = {
  todos,
  visibilityFilter: 'SHOW_ACTIVE',
};

console.log(selector(state));
console.log(selector(state));


state = {
  todos,
  visibilityFilter: 'SHOW_ACTIVE',
};

console.log(selector(state));

todos.push({ value: 44, completed: true });

console.log(selector(state));
