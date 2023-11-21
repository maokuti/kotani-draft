import React from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';

const MobileMoneyTransferComponent = () => {
  const startMobileMoneyTransfer = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ1c2VyX2lkIjoiNjU1NTM1MTA5MmVhNTY0MzI0ZmE1MjU5IiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMTVUMjE6MTc6MjIuMDc1WiJ9.31f3d609a5787fe7e5ddcdbbf8135c4eeec7f33d9250697d16e65a8bebede285',
        },
      };

      const response = await axios.post('https://kotanipaystaging.api-service.live/api/v3/deposit/mobile-money', null, options);

      console.log(response.data);
      // Handle the response as needed for mobile money transfer
    } catch (error) {
      console.error(error);
      // Handle errors or exceptions for mobile money transfer here
    }
  };

  return (
    <View>
      {/* UI elements */}
      <Button title="Start Mobile Money Transfer" onPress={startMobileMoneyTransfer} />
    </View>
  );
};

export default MobileMoneyTransferComponent;