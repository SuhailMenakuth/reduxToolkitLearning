import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "./Components/Slice"
import routingReducer from './Components/Routing/RoutingSlice'
import quizReducer from './Components/Quiz/QuizSlice'
const store = configureStore({
reducer :{
  todos :todoreducer,
  numbersArray:routingReducer,
  quiz:quizReducer
}
})

export default store;