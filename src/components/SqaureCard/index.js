import React from "react";

const SqaureCard = ({ styleAdd }) => {
  return (
    <div className={`square-card ${styleAdd}`}>
      <div className="d-flex justify-space-bw align-center gap-1">
        <h3>Completed</h3>
        <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div className="labels">
        <label className="bg-blue">Label/1</label>
        <label className="bg-blue">Label/1</label>
        <label className="bg-blue">Label/1</label>
      </div>
      <div className="total-count">4</div>
      <div className="fn-sm">
        Total count <span className="text-bolder">0/2 times</span>
      </div>
    </div>
  );
};

export default SqaureCard;
