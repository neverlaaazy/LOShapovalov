import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import LocalActsPage from './pages/LocalActsPage.jsx'
import PersonalDataConsentPage from './pages/PersonalDataConsentPage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="local-acts" element={<LocalActsPage />} />
        <Route
          path="personal-data-consent"
          element={<PersonalDataConsentPage />}
        />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
