export default function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center py-3 mb-0 my-4 border-top w-100 bg-dark fixed-bottom">
      <p className="col-md-4 mb-0 text-secondary">
        &copy; Music Master | {new Date().getFullYear()}
      </p>

      <ul className="nav col-md-4 justify-content-end me-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-secondary">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-secondary">
            Pricing
          </a>
        </li>
      </ul>
    </footer>
  );
}
