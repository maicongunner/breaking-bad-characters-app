import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Paginator from 'react-hooks-paginator';

import useFetchData from '../../components/useFetchData';

import { CharactersList } from './styles';

import CharacterData from '../../components/CharacterData';
import Container from '../../components/Layout/Container';
import Loading from '../../components/Loading';

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const pageLimit = 10;

  const { loading, data } = useFetchData(
    'characters?category=Breaking+Bad',
    '',
    []
  );

  useEffect(() => {
    setCurrentData(data?.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <Container>
      {loading ? (
        <Loading data-testid="loading" />
      ) : (
        <>
          <CharactersList data-testid="resolved">
            {currentData.map(character => (
              <Link key={character.char_id} to={`character-details/${character.char_id}`}>
                <CharacterData data={character} />
              </Link>
            ))}
          </CharactersList>

          <Paginator
            totalRecords={data.length}
            pageLimit={pageLimit}
            pageNeighbours={2}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Container>
  );
}
