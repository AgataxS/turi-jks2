import { createContext, useReducer, useContext } from "react";

const BookingContext = createContext();

const initialState = {
  package: null,
  date: "",
  method: "email",
  extras: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PACKAGE":
      return { ...state, package: action.payload };
    case "SET_DATE":
      return { ...state, date: action.payload };
    case "SET_METHOD":
      return { ...state, method: action.payload };
    case "TOGGLE_EXTRA":
      return state.extras.find((e) => e.id === action.payload.id)
        ? { ...state, extras: state.extras.filter((e) => e.id !== action.payload.id) }
        : { ...state, extras: [...state.extras, action.payload] };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const total = (state.package?.price || 0) + state.extras.reduce((s, e) => s + e.price, 0);
  return (
    <BookingContext.Provider value={{ state, dispatch, total }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
