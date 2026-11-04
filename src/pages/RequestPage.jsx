import { Link } from 'react-router-dom'
import './RequestPage.css'

function RequestPage() {
  return (
    <section className="page-content request-page">
      <p className="eyebrow">СВЯЖИТЕСЬ С НАМИ</p>
      <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
      <iframe
        className="request-form-frame"
        src="https://forms.yandex.ru/u/6aeb2589c45c07b39ce41c3e?iframe=1"
        name="ya-form-6aeb2589c45c07b39ce41c3e"
        title="Форма заявки"
        loading="lazy"
      />
      <nav className="request-legal-links" aria-label="Документы по обработке данных">
        <p>Документы по обработке персональных данных:</p>
        <ul>
          <li>
            <Link to="/local-acts">Локальные акты и документы</Link>
          </li>
          <li>
            <Link to="/privacy-policy">
              Правила обработки персональных данных (проект)
            </Link>
          </li>
          <li>
            <Link to="/personal-data-consent">
              Согласие на обработку персональных данных (проект)
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default RequestPage
