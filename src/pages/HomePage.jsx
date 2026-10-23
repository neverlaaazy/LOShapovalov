import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="page-content">
      <p className="eyebrow">СТАРТОВАЯ СТРАНИЦА</p>
      <h1>Основа приложения готова</h1>
      <p className="page-lead">
        Здесь уже есть общий layout и маршрутизация. Добавляйте новые страницы,
        не дублируя шапку и подвал.
      </p>

      <div className="feature-grid">
        <article className="feature-card">
          <span className="feature-number">01</span>
          <h2>Общий layout</h2>
          <p>
            Навигация, область содержимого и подвал остаются на месте при
            переходе между страницами.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-number">02</span>
          <h2>Отдельные страницы</h2>
          <p>
            Каждая страница хранится в своём файле в <code>src/pages</code>.
          </p>
        </article>
        <article className="feature-card">
          <span className="feature-number">03</span>
          <h2>Понятные адреса</h2>
          <p>
            Например, главная открывается по <code>/</code>, а страница проекта —
            по <code>/about</code>.
          </p>
        </article>
      </div>

      <Link className="text-link" to="/about">
        Посмотреть пример страницы <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default HomePage
