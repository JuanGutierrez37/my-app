import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, ShellBar } from '@ui5/webcomponents-react';
import SayHi from './components/SayHi';
import MyCard  from './components/MyCard';
function App() {
  return (
    <>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={'UI5 Web Components for React logo'}
          />
        }
        primaryTitle="UI5 Web Components for React Template"
        profile={<Avatar icon={employeeIcon} />}
      />
      <SayHi />
      <MyCard />
    </>
  );
}

export default App;
