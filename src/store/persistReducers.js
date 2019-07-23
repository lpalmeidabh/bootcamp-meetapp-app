import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// key: utilizada para identificar a qual aplicacao os dados persistidos pertencem
// whitelist: lista de reducers que podem ser armazenados
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
