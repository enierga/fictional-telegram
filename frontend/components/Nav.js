import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/items">
      <a>shop</a>
    </Link>

    <Link href="/sell">
      <a>sell</a>
    </Link>

    <Link href="/">
      <a>signup</a>
    </Link>

    <Link href="/">
      <a>orders</a>
    </Link>

    <Link href="/">
      <a>account</a>
    </Link>

  </NavStyles>
)

export default Nav;