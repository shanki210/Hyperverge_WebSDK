import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import hypervergeLogo from '/image.png'
import './App.css'

function App() {

  function starOnboarding() {
    const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6InZpdmVtayIsImhhc2giOiJmZjYxZjdmMjZhYjgzMzcwZGYwOTc4MzI1ZjFiYjRhZjJhMzE0YTMxMThiMmNlOTk4NzhjZjA0ODJiZDU0NjM5IiwiaWF0IjoxNzM4NTY0NTU4LCJleHAiOjE3Mzg1OTQ1NTgsImp0aSI6IjQ3YTlhYmNlLTA2OWEtNDU4Mi04ZDg3LWQ3MGYxYWM5ZDA2YSJ9.KAH4n9aPCBBdQMB3p0Npvwe5qxP9_DR6KfAJSdJyAdMUzKEXbk79_7FWUZAVaeOmdm0NQO4P7y3wWQ2QNWUDaDstrKt7xxKLVvby2-hcf1npTVjjgc_DVGX72c8qhHDvRbXUq8bGx6CqNe70l9ata3dVCKIH5kwin5ktYW7wesQ"
    const hyperKycConfig = new window.HyperKycConfig(
        accessToken,
        "first_workflow",
        "1234"
    );
    const inputs = {
        name: "eshu",
        phone: "1234"
      };
      hyperKycConfig.setInputs(inputs);
      const handler = (HyperKycResult) => {
        switch (HyperKycResult.status) {
          case "user_cancelled":
            console.log("User cancelled the workflow");
            break;
          case "error":
            alert("Error");
            console.log(HyperKycResult);
            break;
          case "auto_approved":
            alert("User approved");
            break;
          case "auto_declined":
            console.log("Workflow auto-declined");
            break;
          case "needs_review":
            console.log("Workflow needs manual review");
            break;
          default:
            console.warn("Unknown status:", HyperKycResult.status);
            break;
        }
      };
      window.HyperKYCModule.launch(hyperKycConfig, handler);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={hypervergeLogo} className="logo" alt="Hyperverge logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>HyperVerge Onboarding</h1>
      <div className="card">
        <button onClick={starOnboarding}>
          Start Onboarding
        </button>
      </div>
    </>
  )
}

export default App
