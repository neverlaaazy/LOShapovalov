import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import './Layout.css'

function Layout() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')
  const copyMessageTimeout = useRef(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(
    () => () => window.clearTimeout(copyMessageTimeout.current),
    [],
  )

  useEffect(() => {
    const scrollFrame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1))

        if (target) {
          target.scrollIntoView({
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
              .matches
              ? 'auto'
              : 'smooth',
            block: 'start',
          })
          return
        }
      }

      window.scrollTo(0, 0)
    })

    return () => window.cancelAnimationFrame(scrollFrame)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const mainContent = document.querySelector('.site-main-inner')
    if (!mainContent || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    const observeRevealElements = () => {
      const revealElements = mainContent.querySelectorAll(
        '.home-hero, .home-about, .home-services, .home-posts, .home-contacts, .page-content > *',
      )

      revealElements.forEach((element) => {
        if (!element.classList.contains('scroll-reveal')) {
          element.classList.add('scroll-reveal')
          observer.observe(element)
        }
      })
    }

    observeRevealElements()
    const mutationObserver = new MutationObserver(observeRevealElements)
    mutationObserver.observe(mainContent, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      mainContent.querySelectorAll('.scroll-reveal').forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible')
      })
    }
  }, [location.pathname])

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
          <Link className="brand" to="/">
            <span className="brand-logo-span">
              <img className="brand-logo" src="/logo.svg" alt="" />
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
                <Link
                  className="site-nav-a"
                  to="/#news"
                  onClick={closeMenu}
                >
                  НОВОСТИ
                </Link>
                <Link
                  className="site-nav-a"
                  to="/#contacts"
                  onClick={closeMenu}
                >
                  КОНТАКТЫ
                </Link>
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
          <Outlet context={{ copyContact }} />
        </div>
      </main>

      <footer className="site-footer">
        <div className="layout-container site-footer-inner">
          <div className="footer-main">
            <div className="footer-identity">
              <div className="footer-brand-row">
                <Link className="footer-brand" to="/">
                  <img src="/logo.svg" alt="" />
                  <span>
                    Юридический кабинет
                    <br />
                    И.М. Шаповалова
                  </span>
                </Link>
              </div>
              <div className="footer-socials" aria-label="Социальные сети">
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
            </div>

            <nav className="footer-nav" aria-label="Карта сайта">
              <p>КАРТА:</p>
              <NavLink className="footer-nav-link" to="/" end>
                ГЛАВНАЯ
              </NavLink>
              <Link className="footer-nav-link" to="/#contacts">
                КОНТАКТЫ
              </Link>
              <Link className="footer-nav-link" to="/#news">
                НОВОСТИ
              </Link>
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
