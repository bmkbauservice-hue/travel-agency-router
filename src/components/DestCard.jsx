import { Link } from 'react-router';
import useBooking from '../contexts/useBooking';

function DestCard({ title, image, text, slug }) {
  const {
    bookingState,
    addDestination,
    removeDestination,
  } = useBooking();

  const isBooked = bookingState.destinations.includes(slug);

  function handleBooking() {
    if (isBooked) {
      removeDestination(slug);
    } else {
      addDestination(slug);
    }
  }

  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <Link
          to={`/destinations/${slug}`}
          className="card-title text-lg font-semibold hover:text-primary"
        >
          {title}
        </Link>

        <p>{text}</p>

        <div className="card-actions mt-4 justify-end">
          <button
            type="button"
            onClick={handleBooking}
            className={
              isBooked
                ? 'btn btn-error'
                : 'btn btn-primary'
            }
          >
            {isBooked ? 'Buchung entfernen' : 'Jetzt buchen'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestCard;
