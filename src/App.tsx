import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Blogs from "./component/Blogs";
import BlogPage from "./component/BlogPage";
import AppBar from "./component/AppBar";
import Publish from "./component/Publish";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen overflow-hidden overflow-y-auto">
        <AppBar/>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
