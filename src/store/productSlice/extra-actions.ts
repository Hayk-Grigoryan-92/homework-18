import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { IToDoItem } from "./toDoListSlice";

export const addToDoList = createAsyncThunk(
    "AuthSlice/addToDoList",
    async (data:IToDoItem) => {
        //const { apiClient } = extra;
        const response = await axios.post(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDoListH`, data);
        return response.data;
    }
);

export const getToDoList = createAsyncThunk(
    "AuthSlice/getToDoList",
    async ()=>{
        const response = await axios.get(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDoListH`)
        return response.data
    }
   
)

export const updateToDoList = createAsyncThunk(
    "AuthSlice/updateToDoList",
    async (id)=>{
        const response = await axios.get(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDoListH/${id}`)
        return response.data
    }
   
)


export const deleteToDoList = createAsyncThunk(
    "AuthSlice/deleteToDoList",
    async (id)=>{
        const response = await axios.get(`https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/toDoListH/${id}`)
        return response.data
    }
   
)

