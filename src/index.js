import React from "react";
import ReactDOM from "react-dom";

import ThemeContext from "./theme-context";
import ErrorBoundary from "./error-boundary";
const App = React.lazy(() => import("./Hook"));
const Loading = () => <div>Loading</div>;

const defaultTheme = {
  background: "red",
  color: "blue"
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeContext.Provider value={defaultTheme}>
        <React.Suspense fallback={<Loading />}>
          <App />
        </React.Suspense>
      </ThemeContext.Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
