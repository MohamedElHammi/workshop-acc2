import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
// import Events from "./components/Events";
const Events = React.lazy(() => import("./components/Events"));
// import EventAddForm from "./components/EventForm";
const EventAddForm = React.lazy(() => import("./components/EventAddForm"));
// import EventUpdateForm from "./components/EventUpdateForm";
const EventUpdateForm = React.lazy(() => import("./components/EventUpdateForm"));
// import EventDetails from "./components/EventDetails";
const EventDetails = React.lazy(() => import("./components/EventDetails"));

function App() {
  return (
    <React.Suspense fallback={<h1> Loading ...</h1>}>
      <NavigationBar />
      <Routes>
        <Route path="/events">
          <Route index element={<Events />} />
          <Route path="add" element={<EventAddForm />} />
          <Route path='update/:id' element={<EventUpdateForm />}/>
          <Route path=":id" element={<EventDetails />} />
        </Route>
        <Route
          path="*"
          element={<img src="/images/notfound.jfif" width="100%" />}
        />
      </Routes>
    </React.Suspense>
  );
}

export default App;
