import React from "react";
import Navbar from "./Components/Navbar";

import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import VideoPlaying from "./Components/VideoPlaying";
import { useAuth } from "./Context/AuthProvider";
import Loading from "../src/Loader/Loading";

const App = () => {
  //  HERE WE ARE ACCESING THE DATA OF OUR CONTEXT THAT IS MADE IN AUTHPROVIDER.JSX
  //  We are using our custom hook UseAuth() for accesing the data

  // const {data,loading} = useAuth();

  // console.log(data);
  // console.log(loading);

  const { loading } = useAuth();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search/:searchQuery" element={<Search />}></Route>
            <Route path="/video/:id" element={<VideoPlaying />}></Route>
          </Routes>
        </div>
      )}

      {/* copied */}
    </div>
  );
};

export default App;
