import { configureStore } from "@reduxjs/toolkit";
import userName from './slicess/userName.slice'

export default configureStore({
  reducer: {
    userName
  }
})
