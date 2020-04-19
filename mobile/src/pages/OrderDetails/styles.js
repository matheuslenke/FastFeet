import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: 10px 20px;
  align-items: flex-start;
`;

export const OrderCard = styled.View`
  border: none;
  align-self: stretch;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const HeadTitle = styled.Text`
  margin-left: 10px;
  color: ${colors.primary};
  font-weight: bold;
  font-size: 15px;
`;

export const Info = styled.View``;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-bottom: 5px;
`;

export const InfoText = styled.Text`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

export const StatusCard = styled.View`
  border: none;
  align-self: stretch;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

export const Dates = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DateDiv = styled.View``;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  height: 90px;
  background: #f8f9fd;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
export const ActionText = styled.Text`
  flex-wrap: wrap;
  text-align: center;
`;
export const ProblemInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-width: 2px;
`;
export const ShowProblems = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-right-color: rgba(0, 0, 0, 0.1);
  border-right-width: 2px;
  padding: 10px;
`;
export const ConfirmDelivery = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Action = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
