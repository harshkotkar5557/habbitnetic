import React from "react";

const SqaureCard = ({ title, eventIcon, labels, isTotal, data }) => {
  return (
    <div className={`square-card bg-light-${data?.colour}`}>
      <div className="d-flex justify-space-bw align-center gap-1">
        <h3>{title || data?.habitName}</h3>
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
            <span className="text-bolder">{ `${data?.actualRepeat}/${data?.goal} times today`}</span>
        )}
      </div>
    </div>
  );
};

export default SqaureCard
