import React from "react";
import SignMeUp from "./signMeUp";

export const Header = () => {
  const signupCallback = email => {
    return console.log(`sign up called with email ${email}`);
  };

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <img src="/static/glennpacker-net.jpg" />
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div className="pb-3 text-right">
            <h2>Next Paraglider 2019</h2>
          </div>

          <div className="row col-12 text-lg-right">
            <SignMeUp signupCallback={signupCallback} />
          </div>
        </div>
      </div>
    </div>
  );
};
