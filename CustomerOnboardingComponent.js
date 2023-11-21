import React, { Component } from 'react';
import axios from 'axios';

class CustomerOnboardingComponent extends Component {
  startOnboardingBank = () => {
    const postData = {
      bio: {
        first_name: 'John',
        surname: 'Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        occupation: 'Engineer',
        country_code: 'NGA',
      },
      kyc: { type: 'BANK_VERIFICATION_NUMBER', number: '123456789' },
      contact: {
        phone_number: '+123456789',
        email_address: 'john@example.com',
        address: {
          line: '123 Street',
          province: 'Province',
          municipality: 'Municipality',
          city: 'City',
        },
      },
      reference: 'Ref123',
    };

    // Set the API endpoint URL for bank onboarding
    const apiUrl = 'https://kotanipaystaging.api-service.live/api/v3/customer/bank';

    // Make the POST request using Axios
    axios
      .post(apiUrl, postData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ1c2VyX2lkIjoiNjU1NTM1MTA5MmVhNTY0MzI0ZmE1MjU5IiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMTVUMjE6MTc6MjIuMDc1WiJ9.31f3d609a5787fe7e5ddcdbbf8135c4eeec7f33d9250697d16e65a8bebede285', // Replace with your actual API key for bank onboarding
        },
      })
      .then(response => {
        console.log(response.data);
        // Handle the response for bank onboarding as needed
      })
      .catch(error => {
        console.error(error);
        // Handle errors or exceptions for bank onboarding here
      });
  }

  startOnboardingMobileMoney = () => {
    const postData = {
      country_code: 'GHA',
    };

    // Set the API endpoint URL for mobile money onboarding
    const apiUrl = 'https://kotanipaystaging.api-service.live/api/v3/customer/mobile-money';

    // Make the POST request using Axios
    axios
      .post(apiUrl, postData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer eyJ1c2VyX2lkIjoiNjU1NTM1MTA5MmVhNTY0MzI0ZmE1MjU5IiwiY3JlYXRlZF9hdCI6IjIwMjMtMTEtMTVUMjE6MTc6MjIuMDc1WiJ9.31f3d609a5787fe7e5ddcdbbf8135c4eeec7f33d9250697d16e65a8bebede285', // Replace with your actual API key for mobile money onboarding
        },
      })
      .then(response => {
        console.log(response.data);
        // Handle the response for mobile money onboarding as needed
      })
      .catch(error => {
        console.error(error);
        // Handle errors or exceptions for mobile money onboarding here
      });
  }

  render() {
    return (
      <div>
        {/* Onboarding component UI */}
        <button onClick={this.startOnboardingBank}>Start Bank Onboarding</button>
        <button onClick={this.startOnboardingMobileMoney}>Start Mobile Money Onboarding</button>
      </div>
    );
  }
}

export default CustomerOnboardingComponent;