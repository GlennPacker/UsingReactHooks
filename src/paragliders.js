import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState
} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../static/site.css";
import { Header } from "./header";
import { Menu } from "./menu";
import ParagliderData from "./paragliderData";
import ParagliderDetail from "./paragliderDetail";
import { ConfigContext } from "./app";
import paraglidersReducer from "./paraglidersReducer";

const Paragliders = () => {
  const [paragliderClassA, setParagliderClassA] = useState(true);
  const [paragliderClassB, setParagliderClassB] = useState(true);
  const [paragliderList, dispatch] = useReducer(paraglidersReducer, []);
  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(false);
    new Promise(function(resolve) {
      setTimeout(function() {
        resolve();
      }, 1000);
    }).then(() => {
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
  }, []);

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
        .sort((a, b) => {
          return a.name.localeCompare(b.name, "en", {
            sensitivity: "accent"
          });
        });

  const handleChangeClassB = () => {
    setParagliderClassB(!paragliderClassB);
  };

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    dispatch({
      type: favoriteValue ? "favorite" : "unfavorite",
      sessionId: parseInt(e.target.attributes["data-sessionid"].value)
    });
  }, []);

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
