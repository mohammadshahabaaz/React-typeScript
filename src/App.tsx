import React from 'react';
import logo from './logo.svg';
import './App.css';

// import {ToogleButton} from './Components/ToogleButton';

// import {LifecycleMethod,LifecycleMethodWithFunction} from './Components/LifecycleMethods';

import Welcome from './Components/welcome';

// import {ConditionalRender} from './Components/ConditionalRender';

// import {MultipleItems} from './Components/MultipleItems';

// import {CustomHooks} from './Components/CustomHooks';

// import {UseRef} from './Components/UseRef';

// import {UseRefExample} from './Components/UseRefexample';

import {UseReducer} from './Components/useReducer'


// import {UserForm} from './Components/UserForm';


import {UserContextProvider} from './context/UserContextProvider';
import { UseContextProvider } from './Components/UserContextReducer';



// import {UseContextHook} from './Components/useContextHook';

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
       <Welcome name='Lucky'/>
       <Welcome name='Shammi'/>

       <UserContextProvider>
       {/* <UseReducer/> */}
       <UseContextProvider/>
       </UserContextProvider>
       
       {/* <UseContextHook/> */}

       {/* <UserContextProvider>

       <UseReducer/>
       </UserContextProvider> */}
       {/* <CustomHooks/>
       <UseRefExample/> */}

      {/* <UseRef/> */}
       {/* <MultipleItems/> */}

       {/* <ConditionalRender/> */}

       {/* <ToogleButton/>
      
       <UserForm/>

       <LifecycleMethod initialValue = {0}/> */}

       {/* <LifecycleMethodWithFunction initialValue={0}/> */}

      </header>
    </div>
  );
}

export default App;
