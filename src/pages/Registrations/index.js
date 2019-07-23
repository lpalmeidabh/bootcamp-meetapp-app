import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, Meetups } from './styles';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

function Registrations({ isFocused }) {
  const [registrations, setRegistrations] = useState([]);

  async function loadMeetups() {
    const response = await api.get('registrations');
    setRegistrations(response.data);
  }
  useEffect(() => {
    if (isFocused) {
      loadMeetups();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api
      .delete(`meetups/${id}/cancel`)
      .then(res => {
        Alert.alert(
          'Cadastro cancelado',
          'Você cancelou seu registro a esta meetup.'
        );
      })
      .catch(err => {
        Alert.alert('Erro', err.response.data.error);
      });
    loadMeetups();
  }

  return (
    <Background>
      <Header />
      <Container>
        <Meetups
          data={registrations}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              registered
              action={() => handleCancel(item.Meetup.id)}
              data={item.Meetup}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Registrations.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Registrations);
