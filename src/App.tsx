import React from "react";
import FullPageSpinner from "./components/FullPageSpinner";
const Layout = React.lazy(() => import("./containers/Layout"));
function App() {
  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      <Layout />
    </React.Suspense>
  );
}

export default App;
