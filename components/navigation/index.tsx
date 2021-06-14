import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {Home} from '../../screens/home';

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <Icon name="home" color={color} />,
          }}
        />
        <Tab.Screen
          name="explore"
          component={Home}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => <Icon name="search" color={color} />,
          }}
        />
        <Tab.Screen
          name="trending"
          component={Home}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: ({color}) => (
              <Icon name="local-fire-department" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="saved"
          component={Home}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({color}) => (
              <Icon name="bookmark-border" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="account"
          component={Home}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => <Icon name="face" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
