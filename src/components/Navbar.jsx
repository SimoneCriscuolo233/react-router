import { NavLink } from 'react-router-dom';
const links = [
  { id: 1, to: '/', label: 'Home' },
  { id: 2, to: '/about', label: 'Chi siamo' },
  { id: 3, to: '/products', label: 'Prodotti' }
]

const Navbar = () => {


  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">MiniShop</span>
          <ul className="navbar-nav d-flex">
            {links.map((link) => (
              <li key={link.id} className="nav-item">
                <NavLink
                  to={link.to}
                  className={link.to === true ? 'nav-link active fw-bold' : 'nav-link'
                  }
                >{link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar
