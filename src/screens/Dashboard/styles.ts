import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(38)}px;

  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 22px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Photo = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(16 )}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Username = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;