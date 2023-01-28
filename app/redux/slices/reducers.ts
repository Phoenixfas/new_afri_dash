import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
// import menuToggleReducer from "./menuToggleSlice";
import locationReducer from "./locationSlice";
import blogModalToggleReducer from "./blogModalToggleSlice";
import blogAddModalToggleReducer from "./blogAddModalToggleSlice";
import activeBlogReducer from "./activeBlogSlice";
import sortBlogsReducer from "./sortBlogsSlice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  // menuToggle: menuToggleReducer,
  location: locationReducer,
  blogModalToggle: blogModalToggleReducer,
  blogAddModalToggle: blogAddModalToggleReducer,
  activeBlog: activeBlogReducer,
  sortBlogs: sortBlogsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
