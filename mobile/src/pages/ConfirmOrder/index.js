import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {
  Content,
  Card,
  SubmitButton,
  TakePictureButton,
  CameraActionsDiv,
  ChangeCameraButton,
  CloseButton,
  Preview,
} from './styles';

import Background from '~/components/Background';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default function ConfirmOrder({ navigation, route }) {
  const [picture, setPicture] = useState(null);
  const [order, setOrder] = useState(route.params.order);
  const [loading, setLoading] = useState(false);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);

  const profile = useSelector(state => state.user.profile);

  async function takePicture(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line


      setPicture({
        uri:  data.uri,
        type: 'image/jpeg',
        originalname: `signature_${profile.id}_${order.id}.jpg`,
      });
    
  
  }

  async function handleSubmitSignature() {
    setLoading(true);

    const data = new FormData();

    data.append('file', {
      uri: picture.uri,
      name: picture.originalname,
      type: picture.type,
    });

    try {
      console.tron.log(data);

      const response = await api.post('files', data);

      const {id: signature_id } = response.data;



      if (response.status === 200) {
        const finishResponse = await api.put(`deliveryman/${profile.id}/deliveries/${order.id}/finish`, {
          signature_id,
        });
        if (finishResponse.status === 200) {
          Alert.alert('Sucesso!', 'Assinatura enviada com sucesso');
          setLoading(false);
          navigation.navigate('Dashboard');
        }
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao enviar assinatura, tente novamente');
      setLoading(false);
    }
  }

  function switchCamera() {
    if (cameraType === RNCamera.Constants.Type.back)
      setCameraType(RNCamera.Constants.Type.front);
    else setCameraType(RNCamera.Constants.Type.back);
  }

  function handleCancel() {
    setPicture(null);
  }

  return (
    <Background>
      <Content>
        <Card>
          {picture ? (
            <>
              <Preview source={{ uri: picture.uri }} />
              <CloseButton onPress={handleCancel}>
                <Icon name="close" size={30} color="#fff" />
              </CloseButton>
            </>
          ) : (
            <RNCamera
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
              type={cameraType}
              flashMode={RNCamera.Constants.FlashMode.off}
              androidCameraPermissionOptions={{
                title: 'Permissão para utilizar a câmera',
                message: 'Precisamos da sua permissão para utilizar sua câmera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permissão para utilizar seu microfone',
                message:
                  'Precisamos de sua permissão para utilizar seu microfone',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
            >
              {({ camera, status }) => {
                if (status !== 'READY') return <PendingView />;
                return (
                  <CameraActionsDiv
                    style={{
                      flex: 0,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                  >
                    <ChangeCameraButton onPress={switchCamera}>
                      <Icon name="switch-camera" size={35} color="#fff" />
                    </ChangeCameraButton>
                    <TakePictureButton onPress={() => takePicture(camera)}>
                      <Icon name="photo-camera" size={35} color="#fff" />
                    </TakePictureButton>
                  </CameraActionsDiv>
                );
              }}
            </RNCamera>
          )}
        </Card>
        <SubmitButton enabled={!!picture}  onPress={handleSubmitSignature} loading={loading}>
          <Text>Enviar</Text>
        </SubmitButton>
      </Content>
    </Background>
  );
}

ConfirmOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
