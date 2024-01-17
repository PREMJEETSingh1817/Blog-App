import React, { useContext, useEffect } from "react";
import { Header } from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext";
import './App.css'

export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  console.log("Hello")
  useEffect(()=>{
    fetchBlogPosts();
  },[])
  
  return <div className="bg-gradient-to-r from-cyan-300 to-blue-800  w-full flex flex-col gap-y-1 justify-center items-center">  
    <Header/>

    <Blogs/>

    <Pagination/>
  
  
   </div>;
}
