import { Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const LazyLayout = lazy(() => import('./Layout/Layout'));
const LazyHomepage = lazy(() => import('Pages/HomePage/HomePage'));
const LazySearchMoviesPage = lazy(() =>
  import('Pages/SearchMoviesPage/SearchMoviesPage')
);
const LazyMovieDescription = lazy(() =>
  import('./MovieDescription/MovieDescription')
);
const LazyCast = lazy(() => import('./Cast/Cast'));
const LazyReview = lazy(() => import('./Review/Review'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomepage />} />
          <Route path="/movies" element={<LazySearchMoviesPage />} />
          <Route path="/movies/:movieId" element={<LazyMovieDescription />}>
            <Route path="/movies/:movieId/cast" element={<LazyCast />} />
            <Route path="/movies/:movieId/reviews" element={<LazyReview />} />
          </Route>

          <Route path="*" element={<div>Page not found </div>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
