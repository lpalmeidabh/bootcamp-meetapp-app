import styled from 'styled-components/native';

export const Container = styled.View``;

export const CurrentDate = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 16px;
`;

export const DatePicker = styled.View`
  flex-direction: row;

  justify-content: center;
  align-items: center;
`;

export const Meetups = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
