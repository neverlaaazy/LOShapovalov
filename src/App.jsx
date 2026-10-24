import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const LocalActsPage = lazy(() => import('./pages/LocalActsPage.jsx'))
const PersonalDataConsentPage = lazy(
  () => import('./pages/PersonalDataConsentPage.jsx'),
)
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const pageLoading = (
  <div className="page-content" role="status">
    Загрузка страницы…
  </div>
)

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="about"
          element={
            <Suspense fallback={pageLoading}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="local-acts"
          element={
            <Suspense fallback={pageLoading}>
              <LocalActsPage />
            </Suspense>
          }
        />
        <Route
          path="personal-data-consent"
          element={
            <Suspense fallback={pageLoading}>
              <PersonalDataConsentPage />
            </Suspense>
          }
        />
        <Route
          path="privacy-policy"
          element={
            <Suspense fallback={pageLoading}>
              <PrivacyPolicyPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={pageLoading}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
