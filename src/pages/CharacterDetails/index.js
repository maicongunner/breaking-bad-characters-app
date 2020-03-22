import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import useFetchData from '../../components/useFetchData';

import Button from '../../components/Layout/Button';
import Container from '../../components/Layout/Container';
import Loading from '../../components/Loading';

import { BoxCharacterData} from './styles';

export default function CharacterDetails({ match }) {
  const idCharacter = match.params.id;

  const { loading , data } = useFetchData(
    `/characters/${idCharacter}`,
    'character',
    []
  );

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <BoxCharacterData>
          <>
            <Link to="/">
              <Button
                textoBotao="Return to list"
                classe=""
              />
            </Link>
            <div className="box-data-character">
              <figure>
                <img src={data.img} alt={data.name} />
              </figure>
              <div>
              <h3>
                <b>Name:</b> <span>{data.name}</span>
              </h3>
              <p>
                <b>Birthday:</b> {data.birthday}
              </p>
              <p>
                <b>Occupation:</b> {data.occupation?.join(',')}
              </p>
              <p>
                <b>Status:</b> {data.status}
              </p>
              <p>
                <b>Nickname:</b> {data.nickname}
              </p>
              <p>
                <b>Portrayed:</b> {data.portrayed}
              </p>
              <p>
                <b>Breaking Bad Seasons:</b> {data.appearance?.join(',')}
              </p>
              </div>
            </div>
          </>
        </BoxCharacterData>
      )}

    </Container>
  );
}

CharacterDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    })
  }).isRequired,
};
