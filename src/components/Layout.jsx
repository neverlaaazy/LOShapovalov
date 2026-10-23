import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')
  const copyMessageTimeout = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(
    () => () => window.clearTimeout(copyMessageTimeout.current),
    [],
  )

  const showCopyMessage = (message) => {
    setCopyMessage(message)
    window.clearTimeout(copyMessageTimeout.current)
    copyMessageTimeout.current = window.setTimeout(
      () => setCopyMessage(''),
      2200,
    )
  }

  const copyContact = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      showCopyMessage(`${label} скопирован`)
    } catch {
      showCopyMessage(
        'Не удалось скопировать. Разрешите доступ к буферу обмена.',
      )
    }
  }

  const renderContactDetails = () => (
    <>
      <button
        className="site-contact-copy site-contact-address"
        type="button"
        onClick={() =>
          copyContact(
            'город Челябинск, улица Троицкая, дом 1 "В", этаж 1, кабинет 109',
            'Адрес',
          )
        }
      >
        город Челябинск, улица Троицкая, дом 1 &quot;В&quot;, этаж 1, кабинет 109
      </button>
      <button
        className="site-contact-copy site-contact-phone"
        type="button"
        onClick={() => copyContact('+7 (922) 639-96-79', 'Телефон')}
      >
        +7 (922) 639-96-79
      </button>
      <button
        className="site-contact-copy site-contact-email"
        type="button"
        onClick={() => copyContact('pravorus74@yandex.ru', 'Email')}
      >
        pravorus74@yandex.ru
      </button>
    </>
  )

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-contact-bar">
          <div className="layout-container site-contact-inner">
            {renderContactDetails()}
          </div>
        </div>

        <div className="layout-container site-header-inner">
          <Link className="brand" to="/" aria-label="На главную">
            <span className="brand-logo-span">
              <img className="brand-logo" src="/logo.svg" alt="logo" />
            </span>
            <span>
              Юридический кабинет <br />
              И.М. Шаповалова
            </span>
          </Link>

          <div
            className={`site-menu${isMenuOpen ? ' is-open' : ''}`}
            id="site-menu"
          >
            <div className="site-menu-inner">
              <div className="site-menu-contacts">
                {renderContactDetails()}
              </div>
              <nav className="site-nav" aria-label="Основная навигация">
                <NavLink className="site-nav-a" to="/" end onClick={closeMenu}>
                  ГЛАВНАЯ
                </NavLink>
                <NavLink className="site-nav-a" to="/about" onClick={closeMenu}>
                  УСЛУГИ
                </NavLink>
                <NavLink className="site-nav-a" to="/about" onClick={closeMenu}>
                  СТОИМОСТЬ
                </NavLink>
                <NavLink className="site-nav-a" to="/about" onClick={closeMenu}>
                  КОНТАКТЫ
                </NavLink>
                <NavLink
                  className="site-nav-button"
                  to="/about"
                  onClick={closeMenu}
                >
                  ОСТАВИТЬ ЗАЯВКУ
                </NavLink>
              </nav>
            </div>
          </div>

          <button
            className="site-menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span className="site-menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <main className="site-main">
        <div className="layout-container site-main-inner">
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="layout-container site-footer-inner">
          <div className="footer-main">
            <div className="footer-identity">
              <div className="footer-brand-row">
                <Link className="footer-brand" to="/" aria-label="На главную">
                  <img src="/logo.svg" alt="" />
                  <span>
                    Юридический кабинет
                    <br />
                    И.М. Шаповалова
                  </span>
                </Link>
              </div>
              <div className="footer-socials" aria-label="Социальные сети">
                <span role="img" aria-label="ВКонтакте">
                  VK
                </span>
                <span role="img" aria-label="2ГИС">
                  2gis
                </span>
                <span role="img" aria-label="Яндекс">
                  Я
                </span>
              </div>
            </div>

            <nav className="footer-nav" aria-label="Карта сайта">
              <p>КАРТА:</p>
              <NavLink className="footer-nav-link" to="/" end>
                ГЛАВНАЯ
              </NavLink>
              <NavLink className="footer-nav-link" to="/about">
                КОНТАКТЫ
              </NavLink>
              <NavLink className="footer-nav-link" to="/about">
                СТОИМОСТЬ
              </NavLink>
              <NavLink className="footer-nav-link" to="/about">
                УСЛУГИ
              </NavLink>
            </nav>
          </div>

          <p className="footer-disclaimer">
            <span>Любая информация,</span>
            <br className="footer-mobile-break" />{' '}
            представленная на данном сайте, носит исключительно информационный
            характер и ни при каких условиях не является публичной офертой,
            определяемой положениями статьи 437 ГК РФ. Отправляя сведения через
            любую электронную форму на этом сайте, вы даете согласие на
            обработку ваших персональных данных.
          </p>
        </div>

        <div className="footer-bottom-bar">
          <div className="layout-container footer-bottom-inner">
            <div className="footer-bottom">
              <span>
                © {new Date().getFullYear()} Юридический кабинет
                <br className="footer-mobile-break" /> И.М. Шаповалова
              </span>
              <div className="footer-legal-links">
                <span className="footer-legal-primary">
                  <Link to="/local-acts">Локальные акты</Link>
                </span>
                <Link to="/privacy-policy">
                  Правила обработки
                  <br className="footer-mobile-break" /> персональных данных
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <span className="site-copy-status" role="status" aria-live="polite">
        {copyMessage}
      </span>
    </div>
  )
}

export default Layout
