import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceItems = [
  {
  title: 'Взыскание ущерба при ДТП',
  description: (
    <>
      <b>Помогаем взыскать ущерб после ДТП, даже если:</b><br />
      - виновник скрылся;<br />
      - у него нет полиса ОСАГО;<br />
      - страховой выплаты не хватает на ремонт;<br />
      - виновник не согласен с суммой ущерба.<br />

      <b>Что входит в услугу:</b><br />
      - Бесплатная первичная консультация (оценка перспектив);<br />
      - Сбор и подготовка документов (ГИБДД, экспертиза, Европротокол);<br />
      - Организация независимой оценки ущерба;<br />
      - Расчёт реальной стоимости восстановительного ремонта (не только по Единой методике);<br />
      - Подготовка досудебной претензии в страховую;<br />
      - Иск к страховой или виновнику (включая УТС — утрату товарной стоимости);<br />
      - Представительство в суде без вашего участия;<br />
      - Получение исполнительного листа и передача приставам.
    </>
  ),
  },
  {
    title: 'Семейные споры',
    description: (
      <>
        Первая строка<br />
        Вторая строка
      </>
    ),
  },
  {
    title: 'Трудовые споры',
    description: (
      <>
        Первая строка<br />
        Вторая строка
      </>
    ),
  },
  {
    title: 'Защита прав потребителей',
    description: (
      <>
        Помогаем вернуть деньги за некачественный товар или услугу. 
        Взыскиваем неустойку, штраф 50% и моральный вред.<br />

        <b>Когда обращаться:</b><br />
        - бракованный товар, отказ в возврате/обмене;<br />
        - навязывание страховок, кредитов, доп. услуг;<br />
        - некачественный ремонт, стройка, туры, услуги связи;<br />
        - затягивание гарантийного ремонта;<br />
        - нарушение сроков доставки или выполнения работ.<br />

        <b>Что делаем:</b><br />
        - анализ ситуации;<br />
        - досудебная претензия (в 90% случаев хватает);<br />
        - иск в суд и представительство без вас;<br />
        - взыскание: стоимость товара + неустойка + штраф + моральный вред.
      </>
    ),
  },
  {
    title: 'Корпоративное право',
    description: (
      <>
        Первая строка<br />
        Вторая строка
      </>
    ),
  },
  {
    title: 'Другое',
    description: (
      <>
        Первая строка<br />
        Вторая строка
      </>
    ),
  },
]

function HomePage() {
  const [openServiceIndex, setOpenServiceIndex] = useState(null)

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-visual">
            <span
              className="home-hero-square home-hero-square-back"
              aria-hidden="true"
            />
            <span
              className="home-hero-square home-hero-square-front"
              aria-hidden="true"
            />
            <img
              className="home-hero-image"
              src="/home-hero.webp"
              alt=""
              fetchPriority="high"
            />
          </div>

          <div className="home-hero-content">
            <h1>
              <span>Юридический кабинет</span>
              <span>И.М. Шаповалова</span>
            </h1>
            <p>Надежная правовая поддержка от консультации до результата</p>
            <Link className="text-link-button" to="/about">
              ОСТАВИТЬ ЗАЯВКУ
            </Link>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-services-title">
        <div className="home-services-inner">
          <h2 className="section-title" id="home-services-title">
            Краткая сводка об услугах
          </h2>

          <div className="home-services-grid">
            <img
              className="home-services-image"
              src="/bservices.webp"
              alt="Игорь Шаповалов"
              loading="lazy"
            />

            <div className="home-services-content">
              <div className="home-services-accordion">
                {serviceItems.map((service, index) => {
                  const isOpen = openServiceIndex === index
                  const panelId = `home-service-panel-${index}`

                  return (
                    <div className="home-service-item" key={service.title}>
                      <button
                        className="home-service-trigger"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpenServiceIndex(isOpen ? null : index)
                        }
                      >
                        <span>{service.title}</span>
                        <span
                          className="home-service-chevron"
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 20 18" focusable="false">
                            <path d="M3.2 1.5h13.6a2.7 2.7 0 0 1 2.1 4.4l-6.8 9a2.6 2.6 0 0 1-4.2 0l-6.8-9a2.7 2.7 0 0 1 2.1-4.4Z" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className="home-service-panel"
                        id={panelId}
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                      >
                        <div className="home-service-panel-inner">
                          <div className="home-service-panel-content">
                            <p>{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <Link className="text-link-button home-services-link" to="/about">
                СПИСОК УСЛУГ
              </Link>
            </div>
          </div>
        </div>
      </section>

      
    </>
  )
}

export default HomePage
