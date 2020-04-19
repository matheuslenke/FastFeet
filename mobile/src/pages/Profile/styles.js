import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfo = styled.View`
  align-self: flex-start;
  padding: 0 40px;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 50px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666;
  padding-top: 10px;
  padding-left: 5px;
`;
export const Info = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  padding-bottom: 10px;
`;

export const LogoutButton = styled(Button)`
  background: #e74040;
  align-self: stretch;
  margin: 30px;
`;

export const AvatarDefault = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  width: 70px;
  height: 70px;
  background: #ddd;
  color: #fff;
  margin-right: 5px;
`;
