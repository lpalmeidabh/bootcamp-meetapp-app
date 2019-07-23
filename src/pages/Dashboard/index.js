import React, { useEffect, useState, useMemo } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, Meetups, DatePicker, CurrentDate } from './styles';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';
import Header from '~/components/Header';

function Dashboard({ isFocused }) {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: { date },
      });
      setMeetups(response.data);
    }

    if (isFocused) {
      loadMeetups();
    }
  }, [date, isFocused]);

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }

  async function handleRegistration(id) {
    await api
      .post(`meetups/${id}/registrations`)
      .then(res => {
        Alert.alert(
          'Cadastro realizado',
          'Você agora está registrado nesta meetup'
        );
      })
      .catch(err => {
        Alert.alert('Erro', err.response.data.error);
      });
  }

  return (
    <Background>
      <Header />
      <Container>
        <DatePicker>
          <TouchableOpacity onPress={handlePrevDate}>
            <Icon name="chevron-left" size={36} color="#FFF" />
          </TouchableOpacity>
          <CurrentDate>{dateFormatted}</CurrentDate>
          <TouchableOpacity onPress={handleNextDate}>
            <Icon name="chevron-right" size={36} color="#FFF" />
          </TouchableOpacity>
        </DatePicker>
        <Meetups
          data={meetups}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup action={() => handleRegistration(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
