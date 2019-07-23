import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  MeetupHeader,
  MeetupBody,
  MeetupDetails,
  MeetupTitle,
  MeetupInfo,
  RegistrationButton,
} from './styles';

export default function Meetup({ data, action, registered = false }) {
  const dateFormatted = useMemo(
    () =>
      format(parseISO(data.date), "dd 'de' MMMM ', às' HH:mm", { locale: pt }),
    [data.date]
  );

  return (
    <Container>
      <MeetupHeader
        source={{
          uri: data.banner
            ? data.banner.url
            : `https://api.adorable.io/avatar/50/${data.User.name}.png`,
        }}
      />
      <MeetupBody>
        <MeetupTitle>{data.title}</MeetupTitle>
        <MeetupDetails>
          <Icon name="schedule" size={16} color="#999" />
          <MeetupInfo>{dateFormatted}</MeetupInfo>
        </MeetupDetails>
        <MeetupDetails>
          <Icon name="location-on" size={16} color="#999" />
          <MeetupInfo>{data.location}</MeetupInfo>
          {}
        </MeetupDetails>
        <MeetupDetails>
          <Icon name="person" size={16} color="#999" />
          <MeetupInfo>{data.User.name}</MeetupInfo>
        </MeetupDetails>
      </MeetupBody>
      {data.past || (
        <RegistrationButton onPress={action}>
          {registered ? 'Cancelar Inscrição' : 'Realizar Inscrição'}
        </RegistrationButton>
      )}
    </Container>
  );
}
