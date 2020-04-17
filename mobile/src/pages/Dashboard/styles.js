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
  flex-direction: row;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: flex-start;
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
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const OrdersList = styled.View``;

export const Order = styled.View`
  border: 1px solid #ddd;
  align-self: stretch;
`;

export const Head = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const OrderTitle = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const OrderFooter = styled.View`
  margin-top: 20px;
  background: #f8f9fd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OrderDate = styled.View`
  margin: 20px;
`;

export const DateTitle = styled.Text`
  font-size: 10px;
  color: #999;
  margin-bottom: 5px;
`;

export const DateInfo = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const OrderCity = styled.View`
  margin: 20px;
`;

export const CityTitle = styled.Text`
  font-size: 10px;
  color: #999;
  margin-bottom: 5px;
`;

export const CityInfo = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #333;
`;

export const OrderDetails = styled.TouchableOpacity`
  margin: 20px;
`;

export const DetailsTitle = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: #7d40e7;
`;
