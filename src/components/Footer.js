export default function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center py-3 mb-0 my-4 border-top w-100 bg-dark fixed-bottom">
      <p className="col-md-4 mb-0 text-secondary">
        &copy; Music Master | {new Date().getFullYear()}
      </p>

      <ul className="nav col-md-4 justify-content-end me-3">
        <li className="nav-item">
          <a
            href="https://mail.google.com/"
            className="nav-link px-2 text-secondary"
            target="_blank"
          >
            <i className="fa-solid fa-envelope fs-3"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/eric-mckee-dev"
            className="nav-link px-2 text-secondary"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin fs-3"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://lyolayale.github.io/portfolio/"
            className="nav-link px-2 text-secondary"
            target="_blank"
          >
            <i className="fa-brands fa-square-github fs-3 hover-opacity-25"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
