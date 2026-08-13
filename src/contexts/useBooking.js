import { useContext } from 'react';
import BookingContext from './BookingContext';

function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error(
      'useBooking muss innerhalb des BookingProvider verwendet werden.',
    );
  }

  return context;
}

export default useBooking;