import { useReducer } from 'react';
import BookingContext from './BookingContext';

const initialState = {
  destinations: [],
  premium: false,
};

function bookingReducer(state, action) {
  switch (action.type) {
    case 'ADD_BOOKING': {
      if (state.destinations.includes(action.payload)) {
        return state;
      }

      const destinations = [...state.destinations, action.payload];

      return {
        ...state,
        destinations,
        premium: destinations.length >= 3,
      };
    }

    case 'REMOVE_DESTINATION': {
      const destinations = state.destinations.filter(
        (slug) => slug !== action.payload,
      );

      return {
        ...state,
        destinations,
        premium: destinations.length >= 3,
      };
    }

    default:
      throw new Error(`Unbekannte Aktion: ${action.type}`);
  }
}

function BookingProvider({ children }) {
  const [bookingState, dispatch] = useReducer(
    bookingReducer,
    initialState,
  );

  function addDestination(slug) {
    dispatch({
      type: 'ADD_BOOKING',
      payload: slug,
    });
  }

  function removeDestination(slug) {
    dispatch({
      type: 'REMOVE_DESTINATION',
      payload: slug,
    });
  }

  return (
    <BookingContext.Provider
      value={{
        bookingState,
        addDestination,
        removeDestination,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export default BookingProvider;