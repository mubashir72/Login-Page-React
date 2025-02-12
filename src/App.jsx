import "./App.css";
import { Header } from "./Header";
import { LoginForm } from "./LoginForm";

function App() {
  return (
    <div className="bg-gray-400 grid place-content-center min-h-screen flex flex-col ">
      <Header />
      <LoginForm />
      <footer className="text-center ">
        &copy;2025 M.Mubashir72. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
