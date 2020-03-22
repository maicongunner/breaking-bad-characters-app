import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logoBB from '../../assets/images/breaking_bad_logo.jpg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logoBB} alt="The Breaking Bad Caracters" title="The Breaking Bad Caracters" />
        <h1>The Br<span>e</span>aking B<span>a</span>d Charact<span>e</span>rs</h1>
      </Link>
    </Container>
  );
}
