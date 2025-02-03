# HyperVerge Web SDK Integration

This repository contains a web application that integrates the HyperVerge Web SDK for seamless online KYC verification. The frontend is built using Vite and React, and the hosted frontend domain is CORS whitelisted to enable smooth communication with HyperVerge's APIs.

## Features
- Integration with **HyperVerge Web SDK** for online KYC.
- Fast and optimized frontend using **Vite and React**.
- Secure API communication with **CORS whitelisting**.
- User-friendly interface for KYC verification.

## Technologies Used
- **React** (Frontend framework)
- **Vite** (Fast build tool)
- **HyperVerge Web SDK** (KYC verification)
- **CORS Whitelisting** (Security and access control)

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- npm or yarn

### Steps to Run the Project
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/hyperverge-websdk-project.git
   cd hyperverge-websdk-project
2. Install dependencies:
   ```sh
   npm install   # or yarn install
3. Start the development server:
   ```sh
   npm run dev   # or yarn dev

## Usage
To start the onboarding process, click the Start Onboarding button in the UI. The integration is handled using the HyperKycConfig and HyperKYCModule.launch functions to process KYC verification.

## CORS Whitelisting
Ensure your hosted frontend domain is added to HyperVerge’s CORS whitelist to allow seamless API interactions.

