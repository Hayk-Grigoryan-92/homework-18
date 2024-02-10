import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoList,
  deleteToDoList,
  getToDoList,
} from "./store/productSlice/extra-actions";
import { RootState } from "./store";
import { IToDoItem } from "./store/productSlice/toDoListSlice";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const loader: boolean = useSelector(
    (state: RootState) => state.toDoListSlice.loading
  );

  const list: IToDoItem[] = useSelector(
    (state: RootState) => state.toDoListSlice.list
  );

  const handleDelete = (id: any) => {
    list.filter((x) => x !== id);
    dispatch(id, deleteToDoList());
    dispatch(getToDoList() as any);
  };

  useEffect(() => {
    dispatch(getToDoList() as any);
  }, []);

  return (
    <div className="App">
      <div>
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </label>
        <button
          onClick={() => {
            // @ts-ignore:error message
            dispatch(addToDoList({ name: inputValue }) as any);
            setInputValue("");
            dispatch(getToDoList() as any);
          }}
        >
          {loader ? "Loading..." : "Add"}
        </button>

        <div>
          {list.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.name}</p>
                <button>Edit</button>
                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
