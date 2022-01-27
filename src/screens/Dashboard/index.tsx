import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  Username,
  PowerButton
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

          <PowerButton />

        </UserWrapper>
      </Header>

      <HighlightCard />
    </Container>
  );
}
