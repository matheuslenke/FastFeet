import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useEffect } from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import OrderDetails from './pages/OrderDetails';
import ShowProblems from './pages/Problems/ShowProblems';
import InfoProblems from './pages/Problems/InfoProblems';
import ConfirmOrder from './pages/ConfirmOrder';

import colors from '~/styles/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const OrdersStack = createStackNavigator();

function OrdersStackNavigator() {
  return (
    <OrdersStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: colors.primary,
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
        },
      })}
    >
      <OrdersStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <OrdersStack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <OrdersStack.Screen
        name="ShowProblems"
        component={ShowProblems}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Visualizar problemas',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <OrdersStack.Screen
        name="InfoProblems"
        component={InfoProblems}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
      <OrdersStack.Screen
        name="ConfirmOrder"
        component={ConfirmOrder}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Confirmar encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </OrdersStack.Navigator>
  );
}

function SignedInTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.primary,
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStackNavigator}
        options={{
          tabBarLabel: 'Agendamentos',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes({ isLoggedIn }) {
  const [isLoading, setIsLoading] = useState(false);

  return isLoggedIn ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={SignedInTabNavigator} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          animationTypeForReplace: !isLoggedIn ? 'pop' : 'push',
        }}
      />
    </Stack.Navigator>
  );
}
