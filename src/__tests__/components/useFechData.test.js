import { renderHook } from '@testing-library/react-hooks';
import api from '../../Services/api';
import MockAdapter from 'axios-mock-adapter';
import { cleanup } from '@testing-library/react';

import useFetch from '../../components/useFetchData';

afterEach(cleanup);

const mock = new MockAdapter(api);

describe('useFetchData test load data from API', () => {

  it('should be able to fecth characters data', async () => {

    const initialValue = [];
    const url = '/characters';
    const type = '';

    mock.onGet(url).reply(200, ['Characters data']);

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(url, type, initialValue)
    );

    expect(result.current.data).toEqual([]);
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual(['Characters data']);
    expect(result.current.loading).toBeFalsy();
  });

});


