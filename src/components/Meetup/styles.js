import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;

  border-radius: 4px;
  background: #fff;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const MeetupHeader = styled.Image`
  height: 150px;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const MeetupBody = styled.View`
  margin-top: 10px;
  margin: 20px;
  align-self: stretch;
`;

export const MeetupTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const MeetupDetails = styled.View`
  margin-top: 11px;
  flex-direction: row;

  justify-content: flex-start;
  margin-left: 2px;
`;

export const MeetupInfo = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 5px;
`;

export const RegistrationButton = styled(Button)`
  margin: 20px;
  align-self: stretch;
  margin-top: 20px;
`;
