import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import './HomePage.css'

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
    title: 'Юридическая защита прав потребителей ЖКХ',
    description: (
      <>
        Отстоим ваши права в спорах с УК, 
        поставщиками ресурсов и соседями. 
        Поможем добиться перерасчёта платежей, 
        снизить долги и наказать недобросовестных исполнителей.<br />

        <b>С какими вопросами работаем:</b><br />
        - Перерасчёт платежей: вернём деньги за некачественные услуги 
        (отопление, вода, вывоз мусора) или неправильные начисления;<br />
        - Споры с УК: обжалуем незаконные тарифы, 
        заставим делать ремонт подъезда и убирать придомовую территорию;<br />
        - Досудебные и судебные споры: составим претензию, 
        жалобу в Госжилинспекцию или прокуратуру, подадим иск в суд;<br />
        - Собрания собственников: поможем организовать собрание, 
        оспорить решения или подготовить документы для смены УК.
      </>
    ),
  },
  {
    title: 'Возврат автомобилей продавцу',
    description: (
      <>
        Помогаем вернуть деньги за некачественный автомобиль, 
        купленный у дилера или в автосалоне 
        (новый или с пробегом у юрлица).<br />

        <b>Когда можно вернуть:</b><br />
        - выявлены производственные дефекты (двигатель, КПП, электрика, кузов);<br />
        - автомобиль неоднократно был в ремонте (в т.ч. по гарантии);<br />
        - недостатки не устранили в установленный законом срок (45 дней);<br />
        - продавец скрыл информацию о ДТП, пробеге, залоге или ограничениях;<br />
        - машина была в угоне или числится в розыске.<br />

        <b>Что входит в услугу:</b><br />
        - оценка перспективы;<br />
        - сбор документов (ПТС, ДKP, акты приёма-передачи, заказ-наряды);<br />
        - организация независимой технической экспертизы;<br />
        - досудебная претензия к автосалону;<br />
        - иск в суд и представительство без вашего участия;<br />
        - взыскание полной стоимости авто, неустойки, штрафа 50% и морального вреда.
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
    title: 'Взыскание ущерба при затоплении',
    description: (
      <>
        <b>Помогаем взыскать ущерб после затопления квартиры или дома, даже если:</b><br />
        - виновник — сосед сверху;<br />
        - залив произошёл по вине управляющей компании (прорвало стояк, крыша, подвал);<br />
        - виновник отрицает свою вину;<br />
        - сумма ущерба намного выше предложенной компенсации.<br />

        <b>Что входит в услугу:</b><br />
        - Бесплатная консультация — оценка перспектив и алгоритм действий;<br />
        - Выезд специалиста для фиксации последствий затопления;<br />
        - Помощь в составлении акта осмотра (с УК или без неё);<br />
        - Организация независимой строительно-технической экспертизы;<br />
        - Расчёт реального ущерба: отделка, мебель, техника, обесценивание;<br />
        - Досудебная претензия виновнику или УК;<br />
        - Подготовка искового заявления и полное ведение дела в суде;<br />
        - Представительство без вашего участия;<br />
        - Получение исполнительного листа и контроль взыскания.
      </>
    ),
  },
  {
    title: 'Другое',
    description: (
      <>
        - Взыскание ущерба при ДТП;<br />
        - Взыскание ущерба при затоплении;<br />
        - Взыскание ущерба при иных обстоятельствах 
        (пожар, падение дерева/снега/льда, потоп, порча имущества третьими лицами, 
        ДТП с ТСЖ/коммунальной техникой и т.д.);<br />
        - Защита прав потребителей;<br />
        - Возврат автомобиля продавцу;<br />
        - Юридическая защита прав потребителей ЖКХ;<br />
        - Составление и экспертиза проектов договоров (купли-продажи, аренды, подряда, оказания услуг, займа и др.); <br />
        - Досудебное урегулирование споров (претензионная работа);<br />
        - Представление интересов в судах (включая апелляции, кассации и надзорные жалобы);<br />
        - Взыскание долгов по договорам;<br />
        - Жилищные споры: выселение, вселение, определение порядка пользования квартирой, приватизация; <br />
        - Расторжение брака (развод) в ЗАГСе и суде;<br />
        - Взыскание алиментов (увеличение, уменьшение, взыскание в твердой денежной сумме);<br />
        - Раздел совместно нажитого имущества... <br />
        и тд.
      </>
    ),
  },
]

function HomePage() {
  const [openServiceIndex, setOpenServiceIndex] = useState(null)
  const [isAboutMobile, setIsAboutMobile] = useState(() =>
    window.matchMedia('(max-width: 1000px)').matches,
  )
  const [isAboutExpanded, setIsAboutExpanded] = useState(false)
  const { copyContact } = useOutletContext()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)')
    const updateAboutLayout = () => {
      setIsAboutMobile(mediaQuery.matches)
      if (!mediaQuery.matches) {
        setIsAboutExpanded(false)
      }
    }

    updateAboutLayout()
    mediaQuery.addEventListener('change', updateAboutLayout)
    return () => mediaQuery.removeEventListener('change', updateAboutLayout)
  }, [])

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

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-inner">
          <h2 className="section-title" id="home-about-title">
            О нас
          </h2>
          <div className="home-about-content">
            <div className="home-about-copy">
              <p>
                Юридический кабинет Шаповалова Игоря Михайловича помогает разобраться в
                правовых вопросах и определить, какие действия можно
                предпринять в конкретной ситуации. В работе важно не только
                изучить документы, но и понять обстоятельства дела и цели
                человека, который обратился за помощью.
              </p>
              <div
                className="home-about-extra"
                id="home-about-extra"
                aria-hidden={isAboutMobile && !isAboutExpanded}
                inert={isAboutMobile && !isAboutExpanded}
              >
                <div className="home-about-extra-inner">
                  <p>
                    Обращения могут касаться возмещения ущерба после
                    дорожно-транспортного происшествия или затопления,
                    споров с продавцами, автосалонами, управляющими компаниями
                    и другими организациями. Для каждого вопроса подбирается
                    подходящий порядок действий — с учётом документов,
                    сроков и обстоятельств конкретного дела.
                  </p>
                  <p>
                    Работа над обращением начинается с обсуждения ситуации и
                    анализа имеющихся материалов. Затем можно оценить
                    возможные варианты: направить претензию, подготовить
                    документы для переговоров или обратиться в суд. Клиенту
                    объясняют основные этапы и помогают понять, какие сведения
                    и документы потребуются.
                  </p>
                  <p>
                    В ходе работы мы стараемся говорить о сложных правовых
                    вопросах понятно и последовательно: что известно на данный
                    момент, какие шаги доступны и какие обстоятельства могут
                    повлиять на дальнейшее рассмотрение дела. Содержание и
                    объём помощи определяются после знакомства с конкретным
                    обращением.
                  </p>
                </div>
              </div>
              <button
                className="home-about-toggle"
                type="button"
                aria-expanded={!isAboutMobile || isAboutExpanded}
                aria-controls="home-about-extra"
                onClick={() => setIsAboutExpanded((expanded) => !expanded)}
              >
                {isAboutExpanded ? 'Свернуть' : 'Читать полностью'}
              </button>
            </div>
            <img
              className="home-about-image"
              src="/aboutus.webp"
              alt="Игорь Шаповалов"
              loading="lazy"
            />
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

      <section
        className="home-contacts"
        id="contacts"
        aria-labelledby="home-contacts-title"
      >
        <div className="home-contacts-inner">
          <div className="home-contact-content">
            <h2 className="section-title" id="home-contacts-title">
              Контакты
            </h2>

            <div className="home-contact-details">
              <div>
                <p className="home-contact-label">Адрес:</p>
                <button
                  className="site-contact-copy home-contact-address"
                  type="button"
                  onClick={() =>
                    copyContact(
                      'город Челябинск, улица Троицкая, дом 1"в", этаж 1, кабинет 109',
                      'Адрес',
                    )
                  }
                >
                  город Челябинск, улица Троицкая,
                  <br />
                  дом 1&quot;в&quot;, этаж 1, кабинет 109
                </button>
              </div>

              <div>
                <p className="home-contact-label">Часы работы:</p>
                <p className="home-contact-hours">
                  - Пн-Пт: с 9:00 до 20:00
                  <br />
                  - Сб-Вс: по предварительной записи
                </p>
              </div>

              <button
                className="site-contact-copy home-contact-link"
                type="button"
                onClick={() => copyContact('+7 (922) 639-96-79', 'Телефон')}
              >
                +7 (922) 639-96-79
              </button>
              <button
                className="site-contact-copy home-contact-link"
                type="button"
                onClick={() =>
                  copyContact('pravorus74@yandex.ru', 'Email')
                }
              >
                pravorus74@yandex.ru
              </button>
            </div>

            <div className="home-contact-actions">
              <div
                className="home-contact-socials"
                aria-label="Социальные сети"
              >
                <a
                  href="https://vk.ru/pravochel74"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="VK — ВКонтакте"
                >
                  VK
                </a>
                <a
                  href="https://2gis.ru/chelyabinsk/firm/70000001111067356?m=61.372636%2C55.12457%2F16"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="2gis — 2ГИС"
                >
                  2gis
                </a>
                <a
                  href="https://yandex.ru/maps/org/yuridicheskiy_kabinet_i_m_shapovalova/9955535378/?indoorLevel=1&ll=61.372649%2C55.124635&z=17.07"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Я — Яндекс Карты"
                >
                  Я
                </a>
              </div>

              <Link
                className="text-link-button home-contact-request"
                to="/about"
              >
                ОСТАВИТЬ ЗАЯВКУ
              </Link>
            </div>
          </div>

          <iframe
            className="home-contacts-map"
            src="https://yandex.ru/map-widget/v1/?ll=61.372649%2C55.124635&z=17&pt=61.372649%2C55.124635%2Cpm2rdm"
            title="Карта проезда к юридическому кабинету в Челябинске"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </>
  )
}

export default HomePage
