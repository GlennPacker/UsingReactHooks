import React, { useState, useEffect, useContext, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "./header";
import { Menu } from "./menu";
import ParagliderData from "./paragliderData";
import ParagliderDetail from "./paragliderDetail";
import { ConfigContext } from "./app";

const Paragliders = ({}) => {
  const [paragliderClassA, setParagliderClassA] = useState(true);
  const [paragliderClassB, setParagliderClassB] = useState(true);

  const paraglidersReducer = (state, action) => {
    switch (action.type) {
      case "setParaglidersList":
        return action.data;
      default:
        return state;
    }
  };

  const [paragliderList, dispatch] = useReducer(paraglidersReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    //setIsLoading(true);
    setIsLoading(false);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    }).then(() => {
      //setIsLoading(false);
      const paragliderListServerFilter = ParagliderData.filter(
        ({ classA, classB }) => {
          return (paragliderClassA && classA) || (paragliderClassB && classB);
        }
      );

      dispatch({
        type: "setParaglidersList",
        data: paragliderListServerFilter
      });
    });
    return () => {
      // console.log("cleanup");
    };
  }, []); // [speakingClassB, speakingSaturday]);

  const handleChangeClassA = () => {
    setParagliderClassA(!paragliderClassA);
  };

  const paragliderListFiltered = isLoading
    ? []
    : paragliderList
        .filter(
          ({ classA, classB }) =>
            (paragliderClassA && classA) || (paragliderClassB && classB)
        )
        .sort(function(a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  const handleChangeClassB = () => {
    setParagliderClassB(!paragliderClassB);
  };

  const heartFavoriteHandler = (e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    setParagliderList(
      paragliderList.map(item => {
        if (item.id === sessionId) {
          item.favorite = favoriteValue;
          return item;
        }
        return item;
      })
    );
    //console.log("changing session favorte to " + favoriteValue);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showClass === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                Class &nbsp;
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeClassA}
                    checked={paragliderClassA}
                  />
                  A
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeClassB}
                    checked={paragliderClassB}
                  />
                  B
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {paragliderListFiltered.map(item => {
              return (
                <ParagliderDetail
                  key={item.id}
                  {...item}
                  onHeartFavoriteHandler={heartFavoriteHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paragliders;
