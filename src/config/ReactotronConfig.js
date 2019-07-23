import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

// Host adicionado dentro de configure pois tende a nao funcionar no android apenas com .configure()
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.168' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();
  console.tron = tron;
}
