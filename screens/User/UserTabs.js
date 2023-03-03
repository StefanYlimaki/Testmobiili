
import * as React from 'react';
import { Animated, View, TouchableOpacity, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { PreferencesScreen } from './Tabs/PreferencesScreen'
import { UserInfoScreen } from './Tabs/UserInfoScreen';

const Tab = createMaterialTopTabNavigator();

export function UserTabs({ navigation, route }) {
  return (
    <Tab.Navigator
        backBehavior = 'order'
        keyboardDismissMode = 'on-drag'
        tabBar={props => <MyTabBar {...props}/>}
    >
      <Tab.Screen name="Mieltymykset" component={PreferencesScreen} />
      <Tab.Screen name="Omat Tiedot" component={UserInfoScreen} />
    </Tab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
      <View style={{ flexDirection: 'row', backgroundColor: 'grey', height: 50 }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
          });
  
          return (
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}
            >
              <Animated.Text style={{ opacity }}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  