import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "../src/header";
import { Menu } from "../src/menu";

function index() {
  return (
    <div>
      <Header />
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Paragliders whats hot and whats not.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
