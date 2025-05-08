
import { createContext, useReducer, useContext } from "react";

const BookingContext = createContext();

const initial = {
  package: null,   
  extras: [],      
  method: "email", 
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PACKAGE":
      return { ...state, package: action.payload };
    case "SET_EXTRAS":
      return { ...state, extras: action.payload };
    case "SET_METHOD":
      return { ...state, method: action.payload };
    case "RESET":
      return initial;
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);


  const extrasTotal = state.extras.reduce((s, e) => s + e.price, 0);
  const total = (state.package?.price || 0) + extrasTotal;

  return (
    <BookingContext.Provider value={{ state, dispatch, total }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
