import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducers/data-reducer";

const DataContext = createContext(null);

const DataHabitProvider = ({ children }) => {
  const [habitData, disptachHabitData] = useReducer(dataReducer, {
    habits: [],
    completedHabit: [],
    inProgressHabit: [],
    trashHabits: [],
    archiveHabits: [],
    labels: [],
    loading: false,
    error: false,
  });
  return (
    <DataContext.Provider value={{ habitData, disptachHabitData }}>
      {children}
    </DataContext.Provider>
  );
};

const useHabitContext = () => useContext(DataContext);

export { DataHabitProvider, useHabitContext };
