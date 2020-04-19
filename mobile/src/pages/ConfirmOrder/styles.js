import styled from 'styled-components/native';

import Button from '~/components/Button';
import colors from '~/styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const Card = styled.View`
  flex: 10;
  overflow: hidden;
  align-self: stretch;
  border-radius: 4px;
`;

export const SubmitButton = styled(Button)`
  background: ${colors.primary};
  align-self: stretch;
  margin: 15px 30px;
  flex: 1;
`;

export const TakePictureButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.3);
  margin-left: 20px;
`;

export const CameraActionsDiv = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.3);
`;
export const ChangeCameraButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: rgba(255, 255, 255, 0.3);
`;

export const Preview = styled.Image`
  flex: 10;
  width: 100%;
  height: 100%;
  border: dashed;
  align-items: center;
  justify-content: flex-end;
`;
