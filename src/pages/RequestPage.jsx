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
    </section>
  )
}

export default RequestPage
