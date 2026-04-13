function Header({ isDark, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="nav-row">
          <nav className="site-nav" aria-label="Menu principal">
            <a href="#sobre">Sobre mim</a>
            <a href="#projetos">Meus projetos</a>
            <a href="#contato">Contato</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            aria-label="Alternar modo escuro"
            onClick={onToggleTheme}
          >
            <span className="theme-icon" aria-hidden="true">
              {isDark ? "◑" : "◐"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
