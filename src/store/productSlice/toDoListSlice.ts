import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { addToDoList, deleteToDoList, getToDoList, updateToDoList } from './extra-actions';


export interface IToDoItem {
    name : string,
    _id ?: string,
}

interface  IInitialState {
    list: IToDoItem[],
    loading:boolean
}


const initialState: IInitialState = {
    list : [],
    loading:false
} 

export const toDoListSlice = createSlice({
    initialState,
    name: 'toDoSlice',
    reducers: {
            
    },

    extraReducers:(builder)=>{
            builder.addCase(addToDoList.pending, (state)=>{
                state.loading = true
            })
            builder.addCase(addToDoList.fulfilled, (state, action:PayloadAction<IToDoItem[]>)=>{
                state.loading = false
                state.list = action.payload
            })

            builder.addCase(getToDoList.pending, (state)=>{
                state.loading = true
            })
            builder.addCase(getToDoList.fulfilled, (state, action:PayloadAction<IToDoItem[]>)=>{
                state.loading = false
                state.list = action.payload
            })

            builder.addCase(updateToDoList.pending, (state )=>{
                state.loading = true
            })
            builder.addCase(updateToDoList.fulfilled, (state, action:PayloadAction<IToDoItem[]>)=>{
                state.loading = false
                state.list = action.payload
            })
            builder.addCase(deleteToDoList.pending, (state )=>{
                state.loading = true
            })
            builder.addCase(deleteToDoList.fulfilled, (state, action:PayloadAction<IToDoItem[]>)=>{
                state.loading = false
                state.list = action.payload
            })
    }
    
})

export default toDoListSlice.reducer