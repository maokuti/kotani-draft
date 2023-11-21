import React from 'react';
import { View } from 'react-native';
import CustomerOnboardingComponent from './CustomerOnboardingComponent'; // Import the customer onboarding component
import MobileMoneyTransferComponent from './MobileMoneyTransferComponent'; // Import the mobile money transfer component
import DizzItUpWalletTopUpComponent from './DizzItUpWalletTopUpComponent'; // Import the DizzItUp Wallet top-up component

export default function App() {
  return (
    <View>
      <CustomerOnboardingComponent />
      <MobileMoneyTransferComponent /> {/* Include the mobile money transfer component */}
      <DizzItUpWalletTopUpComponent /> {/* Include the DizzItUp Wallet top-up component */}
    </View>
  );
}