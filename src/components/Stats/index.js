import React from "react";
import SqaureCard from "../../components/SqaureCard";

const Stats = ({habitData}) => {
  const { habits, inProgressHabit, completedHabit } = habitData;
  return (
    <div className="task-type-container">
      <SqaureCard
        title="Complete"
        isTotal={true}
        data={{ count: completedHabit ? completedHabit.length: 0}}
      />
      <SqaureCard
        title="In progress"
        isTotal={true}
        data={{ count: inProgressHabit ? inProgressHabit.length: 0}}
      />
      <SqaureCard
        title="Total"
        isTotal={true}
        data={{ count: habits ? habits.length: 0}}
      />
    </div>
  );
};

export default React.memo(Stats);
