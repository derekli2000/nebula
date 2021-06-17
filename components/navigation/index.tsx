import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-elements';
import {enableScreens} from 'react-native-screens';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {AnimeInfo} from '../../screens/anime-info';
import {Home} from '../../screens/home';
import {WithStackParamList} from '../../types/navigation';

enableScreens();

const Stack = createSharedElementStackNavigator<WithStackParamList>();
const Tab = createMaterialBottomTabNavigator();

const withStack = (component: React.ComponentType) => {
  return () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" component={component} />
      <Stack.Screen
        name="anime-info"
        component={AnimeInfo}
        options={({route}) => ({
          title: route.params.english_title,
        })}
      />
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator>
        <Tab.Screen
          name="home"
          component={withStack(Home)}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <Icon name="home" color={color} />,
          }}
        />
        <Tab.Screen
          name="explore"
          component={withStack(Home)}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color}) => <Icon name="search" color={color} />,
          }}
        />
        <Tab.Screen
          name="trending"
          component={withStack(Home)}
          options={{
            tabBarLabel: 'Trending',
            tabBarIcon: ({color}) => (
              <Icon name="local-fire-department" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="saved"
          component={withStack(Home)}
          options={{
            tabBarLabel: 'Saved',
            tabBarIcon: ({color}) => (
              <Icon name="bookmark-border" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="account"
          component={withStack(Home)}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color}) => <Icon name="face" color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
