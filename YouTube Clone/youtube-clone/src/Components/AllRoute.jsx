// Packages

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import PlayVideo from "../Pages/PlayVideo";
import Search from "../Pages/Search";
import Login from "../Pages/Login";
import UploadData from "../Pages/UploadData";
import PrivateRoute from "./PrivateRoute";
import YourVideos from "../Pages/YourVideos";

export default function AllRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<PlayVideo target={"video"} />} />
        <Route
          path="/uploads/:id"
          element={<PrivateRoute component={PlayVideo} target={"uploads"} />}
        />
        <Route path="search/:query" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/upload"
          element={<PrivateRoute component={UploadData} />}
        />
        <Route
          path="/your-videos"
          element={<PrivateRoute component={YourVideos} />}
        />
      </Routes>
    </div>
  );
}
