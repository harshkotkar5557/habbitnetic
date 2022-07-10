import React from "react";
import { useHabitContext } from "../../context/data-context";
import { ACTIONS } from "../../actions/data-action";

const SqaureCard = ({ title, eventIcon, labels, isTotal, data }) => {

  const { disptachHabitData } = useHabitContext();

  function deleteHabit(habit) {
    disptachHabitData({ type: ACTIONS.DELETE_HABIT, payload: habit})
  }

  function archiveHabit(habit) {
    disptachHabitData({ type: ACTIONS.DELETE_HABIT, payload: habit})
  }

  return (
    <div className={`square-card bg-light-${data?.colour}`}>
      <div className="d-flex justify-space-bw align-center gap-1">
        <h3 className="title">{title || data?.habitName}</h3>
        {eventIcon && (
          <abbr title="Complete goal">
          <i
            class={`fa fa-check round-icon cursor-pointer text-${data?.colour}`}
            onClick={() => eventIcon(data)}
            aria-hidden="true"
          ></i>
          </abbr>
          
        )}
      </div>
      <div className="labels">
        {labels &&
          labels.length > 0 &&
          labels.map((label) => <label className="bg-blue">{label / 1}</label>)}
      </div>
      <div className="total-count">{data?.count}</div>
      <div className="fn-sm">
        {isTotal ? (
          "Total count "
        ) : (
            <div className="d-flex gap-10x">
              <span className="text-bolder flex-1">{ `${data?.actualRepeat}/${data?.goal} times today`}</span>
              <i onClick={()=> deleteHabit(data)} class="fa fa-trash-o round-icon" aria-hidden="true"></i>
              <i onClick={()=> archiveHabit(data)} class="fa fa-archive round-icon" aria-hidden="true"></i>
            </div>
        )}
      </div>
    </div>
  );
};

export default SqaureCard
