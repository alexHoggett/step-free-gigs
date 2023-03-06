import React, { useState } from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';

export default function Event({ eventData, navigation }) {
  const { eventName, priceRanges, venue, url, distance } = eventData;
  const [isExpanded, setExpanded] = useState(false);

  const onPress = () => {
    setExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={onPress} testID='eventButton'>
        <Text>{eventName}</Text>
        <Text>{priceRanges}</Text>
        {/* <Text>{date}</Text> */}
        <Text>{distance}</Text>
        <Text>{venue}</Text>
        {isExpanded && (
          <>
            <Button
              title='Buy Tickets'
              onPress={() => {
                navigation.navigate(url);
              }}
            />
            <Button
              title='View Route'
              onPress={() => {
                navigation.navigate('/journey');
              }}
            />{' '}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
