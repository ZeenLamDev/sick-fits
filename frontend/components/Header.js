import Link from 'next/link';
import Nav from './Nav';
import HeaderStyles from './styles/HeaderStyles';

import Logo from './styles/LogoStyles';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyles>
  );
}
