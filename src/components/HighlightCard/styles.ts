import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

interface TypesProps {
  type: 'up' | 'down' | 'total';
};

export const Container = styled.View<TypesProps>`
  background-color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(40)}px;

  margin-right: ${RFValue(17)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypesProps>`
  font-family: ${({ type, theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather) <TypesProps>`
  font-size: ${RFValue(40)}px;

  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.colors.success};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.colors.attention};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.colors.shape};
  `};
`;

export const Footer = styled.View`
`;

export const Amount = styled.Text<TypesProps>`
  font-family: ${({ type, theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: 38px;
  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<TypesProps>`
  font-family: ${({ type, theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ type, theme }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
