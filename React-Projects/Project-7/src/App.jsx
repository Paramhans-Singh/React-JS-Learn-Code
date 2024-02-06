import {
  Home,
  Contact,
  About,
  User,
  Header,
  Footer,
  Github,
} from "./Components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { githubInfo } from "./Components/Github";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/github" element={<Github />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
