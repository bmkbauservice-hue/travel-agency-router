import { NavLink } from 'react-router';

import useBooking from '../contexts/useBooking';
import useTheme from '../contexts/useTheme';

function Navbar() {
  const { bookingState } = useBooking();
  const { theme, setTheme } = useTheme();

  const bookingCount = bookingState.destinations.length;

  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-bold text-primary underline underline-offset-4'
      : 'hover:text-primary';

  return (
    <nav className="navbar flex-wrap gap-3 bg-base-100 px-6 shadow-sm">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold">
          Travel Agency
        </NavLink>
      </div>

      <select
        className="select select-bordered select-sm"
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        aria-label="Theme auswählen"
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="cupcake">Cupcake</option>
        <option value="halloween">Halloween</option>
      </select>

      <div className="badge badge-outline">
        Buchungen: {bookingCount}
      </div>

      {bookingState.premium && (
        <div className="badge badge-warning font-bold">
          ⭐ Premium
        </div>
      )}

      <ul className="menu menu-horizontal gap-1 px-0">
        <li>
          <NavLink to="/" className={linkClass}>
            Heim
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={linkClass}>
            Über uns
          </NavLink>
        </li>

        <li>
          <NavLink to="/destinations" className={linkClass}>
            Reiseziele
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={linkClass}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
