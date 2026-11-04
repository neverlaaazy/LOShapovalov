import { useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceCategories, services } from '../data/services.js'
import './ServicesPage.css'

function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все услуги')
  const filteredServices =
    selectedCategory === 'Все услуги'
      ? services
      : services.filter((service) => service.category === selectedCategory)

  return (
    <section className="page-content services-page">
      <p className="eyebrow">НАПРАВЛЕНИЯ РАБОТЫ</p>
      <h1>Услуги и цены</h1>
      <p className="page-lead">
        Выберите категорию, чтобы посмотреть подходящие услуги. Итоговая
        стоимость зависит от обстоятельств дела и объёма работы.
      </p>

      <div className="services-filters" role="group" aria-label="Фильтр услуг">
        {serviceCategories.map((category) => (
          <button
            className="services-filter"
            type="button"
            key={category}
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className="services-table-scroll"
        role="region"
        aria-label="Таблица услуг и цен"
        tabIndex={0}
      >
        <table className="services-table">
          <thead>
            <tr>
              <th scope="col">Услуга</th>
              <th scope="col">Описание</th>
              <th scope="col">Цена</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service) => (
              <tr key={service.title}>
                <th scope="row">
                  <span className="services-table-category">
                    {service.category}
                  </span>
                  {service.title}
                </th>
                <td>
                  <p className="services-table-summary">{service.summary}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </td>
                <td className="services-table-price">{service.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="services-request">
        <p>
          Если не нашли подходящую услугу, опишите свою проблему в заявке.
        </p>
        <Link className="text-link-button" to="/request">
          ОСТАВИТЬ ЗАЯВКУ
        </Link>
      </div>
    </section>
  )
}

export default ServicesPage
