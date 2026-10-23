import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page-content not-found-page">
      <p className="eyebrow">ОШИБКА 404</p>
      <h1>Страница не найдена</h1>
      <p className="page-lead">
        Возможно, адрес изменился или такой страницы ещё нет.
      </p>
      <Link className="text-link" to="/">
        Вернуться на главную <span aria-hidden="true">→</span>
      </Link>
    </section>
  )
}

export default NotFoundPage
