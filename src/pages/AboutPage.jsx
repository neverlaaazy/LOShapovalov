function AboutPage() {
  return (
    <section className="page-content narrow-content">
      <p className="eyebrow">ПРИМЕР МАРШРУТА · /ABOUT</p>
      <h1>О проекте</h1>
      <p className="page-lead">
        Это пример отдельной страницы внутри общего layout. Замените этот текст
        своим содержимым или используйте файл как шаблон для новой страницы.
      </p>
      <div className="info-panel">
        <h2>Что остаётся общим</h2>
        <p>
          Шапка и подвал находятся в <code>src/components/Layout.jsx</code>.
          Контент текущего маршрута отображается в его <code>&lt;Outlet /&gt;</code>.
        </p>
      </div>
    </section>
  )
}

export default AboutPage
