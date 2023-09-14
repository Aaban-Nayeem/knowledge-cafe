import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarkes from "./Components/Bookmarkes/Bookmarkes";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto flex justify-between md:w-2/3">
        <Blogs />
        <Bookmarkes />
      </div>
    </>
  );
}

export default App;
