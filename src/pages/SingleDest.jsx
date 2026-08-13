import { Link, useParams } from 'react-router';

import { destinations } from '../data/destinations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SingleDest() {
  const { slug } = useParams();

  const destination = destinations.find(
    (item) => item.slug === slug,
  );

  if (!destination) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="container mx-auto mb-auto px-4 py-8">
          <div className="py-20 text-center">
            <h1 className="text-3xl font-bold text-error">
              Reiseziel nicht gefunden
            </h1>

            <p className="mt-2 text-base-content">
              Dieses Reiseziel ist leider nicht vorhanden.
            </p>

            <Link to="/destinations" className="btn btn-primary mt-6">
              Zurück zu den Reisezielen
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="container mx-auto mb-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-6 px-4">
          <h1 className="text-center text-4xl font-bold text-primary">
            {destination.title}
          </h1>

          <img
            src={destination.image}
            alt={destination.title}
            className="h-80 w-full rounded-box object-cover shadow-md"
          />

          <p className="text-lg">{destination.text}</p>

          <Link to="/destinations" className="btn btn-outline">
            Zurück zu den Reisezielen
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SingleDest;