import React from "react";

const Form = ({ formData, handleChange, submit }) => {
  
  return (
    <form className="form-body" onSubmit={(e) => submit(e)}>
      <div className="field-box">
        <label htmlFor="habitName">Name</label>
        <input
          id="habitName"
          placeholder="Enter your name of habit"
          type="text"
          required
          onChange={handleChange}
          value={formData.habitName}
        />
      </div>
      <div className="field-box">
        <label htmlFor="startDate">Start date</label>
        <input
          id="startDate"
          placeholder="dd/mm/yyyy"
          type="date"
          required
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div className="field-box">
        <label htmlFor="endDate">End date</label>
        <input
          id="endDate"
          placeholder="dd/mm/yyyy"
          type="date"
          required
          value={formData.endDate}
          onChange={handleChange}
        />
      </div>
      <div className="field-box">
        <label htmlFor="goal">Goal</label>
        <select
          name="goal"
          id="goal"
          value={formData.goal}
          onChange={(e) => handleChange(e)}
        >
          <option value="1" defaultValue>
            1 time
          </option>
          <option value="2">2 time</option>
          <option value="3 ">3 time</option>
          <option value="4">4 time</option>
        </select>
      </div>
      <div className="field-box">
        <label htmlFor="repeat">Repeat</label>
        <select
          name="repeat"
          id="repeat"
          value={formData.repeat}
          onChange={(e) => handleChange(e)}
        >
          <option value="daily" defaultValue>
            Daily
          </option>
        </select>
      </div>
      <div className="field-box">
        <label htmlFor="colour">Colour</label>
        <select
          name="colour"
          id="colour"
          value={formData.colour}
          onChange={(e) => handleChange(e)}
        >
          <option value="blue" defaultValue>
            Blue
          </option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <button type="submit" class="btn-v2 bg-blue m-1">
        Done
      </button>
    </form>
  );
};

export default React.memo(Form);
