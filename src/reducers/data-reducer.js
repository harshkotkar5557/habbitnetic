import { ACTIONS } from "../actions/data-action";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_HABIT:
      return addHabit(state, action.payload.habit);
    case ACTIONS.UPDATE_HABIT:
      return updateHabit(state, action.payload.habit);
    case ACTIONS.UPDATE_REPEATION_STATUS:
      return updateHabitRepeation(state, action.payload.habit);
    default:
      return state;
  }
};

function addHabit(state, habit) {
    const { inProgressHabit, habits } = state;
    const newHabit = {
        ...habit,
        id: habits.length + 1,
        actualRepeat: 0,
        goal: habit?.goal || "1",
        repeat: habit?.repeat || "daily",
        colour: habit?.colour || "blue",
      }
  return {
    ...state,
    inProgressHabit: [...inProgressHabit, newHabit],
    habits: [...habits, newHabit],
  };
}

function updateHabit(state, habit) {
  const { habits } = state;
  const newHabits = habits.filter((h) => habit.id !== h.id);
  return { ...state, habits: [...newHabits, habit] };
}

function updateHabitRepeation(state, habit) {
  let { habits } = state;
  let completedHabit = [];
  let inProgressHabit = [];
  habits = habits.filter((h) => habit.id !== h.id).concat(habit);
  habits.filter((h) =>
    +h.goal === h.actualRepeat
      ? completedHabit.push(h)
      : inProgressHabit.push(h)
  );
  return { ...state, habits, completedHabit, inProgressHabit };
}
