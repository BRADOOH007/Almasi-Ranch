import { Link } from 'react-router-dom';
import { useTitle } from '../lib/useTitle';

export const NotFound = () => {
  useTitle('Page not found | Almasi Ranch');
  return (
    <section className="flex min-h-[70vh] items-center bg-forest-deep text-cream">
      <div className="container-page text-center">
        <p className="eyebrow !text-gold-light">Error 404</p>
        <h1 className="mt-5 font-serif text-6xl font-semibold sm:text-7xl">This page has wandered off.</h1>
        <p className="mx-auto mt-6 max-w-md text-cream/75">
          The page you are looking for does not exist. Head back to the ranch and find what you need.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-forest !bg-gold !text-forest-deep hover:!bg-gold-light">
            Back to home
          </Link>
          <Link to="/products" className="btn-outline">
            View products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
