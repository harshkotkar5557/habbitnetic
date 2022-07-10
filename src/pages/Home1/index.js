import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import SqaureCard from "../../components/SqaureCard";
import Stats from "../../components/Stats";
import { useHabitContext } from "../../context/data-context";
import { ACTIONS } from "../../actions/data-action";

const Home1 = () => {
  // data-context
  const { habitData, disptachHabitData } = useHabitContext();
  const { habits, inProgressHabit, completedHabit } = habitData;
  // state
  const [isModalOpen, setModal] = useState(false);
  const [isStatsOpen, setStats] = useState(false);
  const [habit, setHabit] = useState();

  function handleEventChange(e) {
    const targetObj = e.target;
    const newHabit = {
      ...habit,
      [targetObj.id]: targetObj.value,
    };
    setHabit(newHabit);
  }

  function onSubmit(e) {
    e.preventDefault();
     disptachHabitData({
      type: ACTIONS.ADD_HABIT,
      payload: { habit: habit },
    });
    setModal((prev) => !prev);
    setHabit({})
  }

  function markCompleteTask(habit) {
    const updatedHabit = { ...habit, actualRepeat: habit.actualRepeat + 1 };
    disptachHabitData({
      type: ACTIONS.UPDATE_REPEATION_STATUS,
      payload: { habit: updatedHabit },
    });
  }

  return (
    <Container styleClass={"main-container"}>
      <div className="nav-bar">
        <h1>Habbitnetic</h1>
      </div>
      <div className="d-flex h-90v p-t-2">
        <Sidebar />
        <section className="content-section">
          <div className="d-flex justify-space-bw">
            <h2>Welcome, Haresh👋</h2>
            <h4
              className="text-blue cursor-pointer"
              onClick={() => setStats((prev) => !prev)}
            >
              Today <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </h4>
          </div>
          {!isStatsOpen && <Stats habitData={habitData} />}
          <div className="d-flex justify-space-bw p-t-15">
            <h2>My Habits 🎯</h2>
            <h4
              className="text-blue cursor-pointer"
              onClick={() => setModal((prev) => !prev)}
            >
              <i class="fa fa-plus" aria-hidden="true"></i> Create Habit
            </h4>
          </div>
          <div className="text-bold p-1">ACTIVE</div>
          {inProgressHabit?.length ? (
            <div className="task-type-container">
              {inProgressHabit.map((habit) => (
                <SqaureCard
                  key={`${habit.id}-${habit.habitName}`}
                  data={habit}
                  eventIcon={markCompleteTask}
                />
              ))}
            </div>
          ) : (
            <p className="text-blue p-2">No task for you</p>
          )}
          <div className="text-bold p-1">COMPLETED</div>
          {completedHabit?.length ? (
            <div className="task-type-container">
              {completedHabit.map((habit) => (
                <SqaureCard  key={`${habit.id}-${habit.habitName}`} data={habit} />
              ))}
            </div>
          ) : (
            <p className="text-blue p-2">No task for you</p>
          )}
        </section>
      </div>
      <Modal
        open={isModalOpen}
        close={() => setModal((prev) => !prev)}
        title={"New Habit"}
      >
        <Form
          formData={habitData}
          handleChange={handleEventChange}
          submit={onSubmit}
        />
      </Modal>
    </Container>
  );
};

export default Home1;
