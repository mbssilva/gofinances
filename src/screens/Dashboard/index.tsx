import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{
              uri: 'https://avatars.githubusercontent.com/u/60112997?v=4'
            }} />

            <User>
              <UserGreeting>Olá, </UserGreeting>
              <Username>Matheus</Username>
            </User>
          </UserInfo>
        </UserWrapper>
      </Header>
    </Container>
  );
}
