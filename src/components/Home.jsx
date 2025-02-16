import { Header } from "../Header";
import { LoginForm } from "../LoginForm";

export const Home = () => {
  return (
    <div className="bg-gray-400  min-h-screen">
      <Header />
      <LoginForm />
      <footer className="text-center ">
        &copy;2025 M.Mubashir72. All rights reserved.
      </footer>
    </div>
  );
};
