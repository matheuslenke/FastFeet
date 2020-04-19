import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
  align-items: center;
`;

export const Welcome = styled.View`
  width: 100%;
  padding: 0 40px;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
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

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

export const Info = styled.View`
  padding: 0 50px 0 15px;
  align-items: flex-start;
`;

export const WelcomeInfo = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const OrdersDiv = styled.View`
  flex: 1;
  margin: 20px;
  padding: 0 20px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #444;
  font-weight: bold;
`;

export const Filters = styled.View`
  flex-direction: row;
`;

export const Filter = styled.TouchableOpacity`
  padding-right: 15px;
`;

export const FilterText = styled.Text`
  color: ${(props) => (props.active ? colors.primary : '#999')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  text-decoration-color: ${colors.primary};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const OrdersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const OrderContainer = styled.View`
  margin: 10px 0;
`;
