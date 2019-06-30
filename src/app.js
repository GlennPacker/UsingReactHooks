import React from "react";
import Home from "./Home";
import Paragliders from "./paragliders";

export const ConfigContext = React.createContext();

const pageToShow = pageName => {
  if (pageName === "Home") return <Home />;
  if (pageName === "Paragliders") return <Paragliders />;
  return <div>Not Found</div>;
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>
    </ConfigContext.Provider>
  );
};

const configValue = {
  showClass: true,
  showSignUp: false
};

export default App;
