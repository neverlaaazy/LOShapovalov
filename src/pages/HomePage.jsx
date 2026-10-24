import { Link } from 'react-router-dom'

function HomePage() {
  return (
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
          <img className="home-hero-image" src="/home-hero.webp" alt="" />
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
  )
}

export default HomePage
