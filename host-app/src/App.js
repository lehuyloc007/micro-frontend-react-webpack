import React from "react";
import Router from "./router/Router";
//const RemoteButton = React.lazy(() => import("Remote/Button"));
 
export const App = () => (
 <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
   <h1>This is the Host!</h1>
   <div>Header Footer Sidebar</div>
   <h2>Remote App:</h2>
      <Router />
   <br />
   <a href="http://localhost:4000">Link to Remote App</a>
 </div>
);
export default App;