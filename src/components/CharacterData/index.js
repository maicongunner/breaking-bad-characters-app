import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function CharacterData({ data }) {
  return (
    <Container key={data.id}>
      <div>
        <p>
          <b>Name:</b> {data.name}
        </p>
        <p>
          <b>Occupation:</b> {data.occupation?.join(',')}
        </p>
        <p>
          <b>Nickname:</b> {data.nickname}
        </p>
      </div>
    </Container>
  );
}

CharacterData.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    occupation: PropTypes.object,
    nickname: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
