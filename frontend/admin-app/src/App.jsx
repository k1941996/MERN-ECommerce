import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Containers/Home';
import SignUp from './Containers/SignUp';
import SignIn from './Containers/SignIn';
import HeaderFooter from './Components/Layout';
import Test from './Containers/Test';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index exact={true} element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="test" element={<Test />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
