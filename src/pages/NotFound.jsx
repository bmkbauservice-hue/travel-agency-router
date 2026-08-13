import { useNavigate } from 'react-router';

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="bg-linear-to-r from-[#6054e8] to-[#f8485e] bg-clip-text text-[10rem] font-extrabold text-transparent lg:text-[16rem]">
        404
      </h1>

      <p className="text-2xl font-bold text-gray-300">
        Seite nicht gefunden 😢
      </p>

      <button
        type="button"
        className="btn btn-primary mt-6"
        onClick={() => navigate(-1)}
      >
        Zurück
      </button>
    </main>
  );
}

export default NotFound;
