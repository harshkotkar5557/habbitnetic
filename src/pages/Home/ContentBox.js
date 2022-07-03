import React from "react";

const ContentBox = () => {
  return (
    <div className="d-flex justify-space-bw w-half flex-dr-col h-100 p-2">
      <div className="brand-name">Habbitnetic</div>
      <div>
        <div>
          <h2>Meet your modern</h2>
          <h2 className="text-blue p-t-10">Habbit Tracker App</h2>
        </div>
        <div className="p-t-15 w-65">
          Manage your daily tasks and workflow in a modern way and boost your
          efficiency without any efforts.
        </div>
      </div>
      <div>
        <button class="btn bg-blue">Join now</button>
        <p className="text-blue p-t-10">Already have an account?</p>
      </div>
    </div>
  );
};

export default ContentBox;
