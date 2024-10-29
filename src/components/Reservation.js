import { useState } from "react";
import BookingForm from "./BookingForm";
import React, { useReducer } from "react";

function Reservation() {
  const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
      return initializeTimes();
    }
    return state;
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
}

export default Reservation;
