import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";
import { Home } from "./components/Home";
import { SignUpForm } from "./components/register/SignUpForm";
import { LoggedIn } from "./components/LoggedIn";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/loggedIn" element={<LoggedIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
