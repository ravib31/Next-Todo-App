"use client"
import Todo from "@/components/Todo";
import axios from "axios";
import React,{ useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
  const [formData,setFormData]= useState({title:"",description:""});
  const [todosData,setTodosData]= useState([]);

  const fetchTodos=async()=>{
    try {
      const response = await axios.get('/api');
      setTodosData(response.data.todos);
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  const onChangeHandler=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form=>({...form,[name]:value}))
    // console.log(formData);
  }
  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    try {
       const response = await axios.post('/api',formData);
      toast.success(response.data.message);
      setFormData({title:"", description:""});
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <div>
      <ToastContainer  theme="dark"/>
      <form onSubmit={onSubmitHandler} className="flex items-start flex-col gap-2 2-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Your Title"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.title}
        />
        <textarea
          name="description"
          placeholder="Enter Your Description"
          className="px-3 py-2 border-2 w-full"
          onChange={onChangeHandler}
          value={formData.description}
        ></textarea>
        <button className="bg-lime-600 text-white px-11 py-3" type="submit" >
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
           {todosData.map((item,index)=>(
            <Todo key={index}  id={index} title={item.title} description={item.description} complete={item.isCompleted} mongoId={item._id}/>
           ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
