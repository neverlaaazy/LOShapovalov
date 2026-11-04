import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/HomePage.jsx'
import './pages/PageStyles.css'
import './styles/Shared.css'

const RequestPage = lazy(() => import('./pages/RequestPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))
const LocalActsPage = lazy(() => import('./pages/LocalActsPage.jsx'))
const PersonalDataConsentPage = lazy(
  () => import('./pages/PersonalDataConsentPage.jsx'),
)
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage.jsx'))
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'))
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
          path="request"
          element={
            <Suspense fallback={pageLoading}>
              <RequestPage />
            </Suspense>
          }
        />
        <Route
          path="services"
          element={
            <Suspense fallback={pageLoading}>
              <ServicesPage />
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
