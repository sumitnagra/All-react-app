import React from "react";
import GroupNews from "./Newsinrow";
import Navbar from "./NewsNavbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function NewsMonkey() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<GroupNews catagory="general" />} />

                    <Route path="/sports" element={<GroupNews catagory="sports" />} />
                    <Route path="/technology" element={<GroupNews catagory="technology" />} />
                    <Route path="/business" element={<GroupNews catagory="business" />} />
                    <Route path="/entertainment" element={<GroupNews catagory="entertainment" />} />
                    <Route path="/health" element={<GroupNews catagory="health" />} />
                    <Route path="/science" element={<GroupNews catagory="science" />} />
                </Routes>
            </Router>
        </>
    )
}
export default NewsMonkey;