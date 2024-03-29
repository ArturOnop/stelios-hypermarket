const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-gradient-to-r from-red-50 to-blue-50 relative"
            id="contact">
      <aside className="items-center grid-flow-col">
        <p>Stelios Hypermarket © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.facebook.com/SteliosHypermarket" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
          </svg>
        </a>
        <a href="mailto:buy@stelioshypermarkets.com">
          <img src="/mail.svg" className="w-[30px]"/>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;