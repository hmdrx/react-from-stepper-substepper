# React form stepper with sub-stepper

"react-form-stepper-substepper" is a versatile React package that simplifies the creation of multi-step forms with nested substeps. It offers a user-friendly way to guide users through complex form input processes, improving user experience and data collection efficiency. With this package, developers can easily implement intuitive form steppers within their React applications.

## Install:

`npm install react-form-stepper-substepper`

![sample image](https://res.cloudinary.com/humendra/image/upload/v1697964523/Screenshot_20231019_200938_xiwdan.png)

## Usage:

App.jsx

```
import React, { useState } from 'react';
import SSS from 'react-form-stepper-substepper';
import BasicForm from './BasicForm';

const mainStepperList = ['Basic Details', 'Documents', 'Bank Details']; // list of main stepper
const subStepperList = [3, 2, 2]; // number of sub-stepper you need respect to main stepper

const App = () => {
  const [inputs, setInputs] = useState('');

  return (
    <SSS
      // backPreviousMainStep={false}
      // IconComplete={<AiFillAccountBook />}
      mainStepperList={mainStepperList}
      subStepperList={subStepperList}
      NextButton={handleNext => {
        return <button onClick={handleNext}>Next</button>;
      }}
      BackButton={handleback => {
        return <button onClick={handleback}>Back</button>;
      }}
      // SaveAsDraftButton={<button onClick={() => {}}>Save As Draft</button>}
    >
      {/* If your subStepperList=[4, 2, 3], then you need to add total 9 forms in the children*/}
      {/* Form 1 */}
      <BasicForm
        inputValue={inputs}
        onInputChange={(text: string) => {
          window.alert(text);
          setInputs(text);
        }}
      />
      {/* Form 2*/}
      <BasicForm
        inputValue={inputs}
        onInputChange={(text: string) => {
          window.alert(text);
          setInputs(text);
        }}
      />
      {/* Form 3 */}
      <BasicForm
        inputValue={inputs}
        onInputChange={(text: string) => {
          window.alert(text);
          setInputs(text);
        }}
      />
      {/* Form 4 */}
      <BasicForm
        inputValue={inputs}
        onInputChange={(text: string) => {
          window.alert(text);
          setInputs(text);
        }}
      />
      {/* and so on..... */}
    </SSS>
  );
};

export default App;
```

BasicForm.jsx

```
import React from 'react';

const BasicForm = ({ inputValue, onInputChange }) => {

  const onChangeHandler = event => {
    onInputChange(event.target.value);
  };

  return (
    <div className="form">
      <label htmlFor="someinput">Some Input</label>
      <br />
      <input
        name="someinput"
        type="text"
        value={inputValue}
        placeholder="Type something..."
        onChange={e => onChangeHandler(e)}
      />
      <br />
      <br />
      <input
        name="someinput"
        type="text"
        value={inputValue}
        placeholder="Type something..."
        onChange={e => onChangeHandler(e)}
      />
    </div>
  );
};

export default BasicForm;

```

## Props:

| Prop (\*Required)                                    | Type                                          | Default                                                                                                                                               | Description                                                                      |
| ---------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| mainStepperList\*                                    | string[]                                      |                                                                                                                                                       | An array of strings for the main stepper                                         |
| subStepperList\*                                     | number[]                                      |                                                                                                                                                       | An array of numbers for the sub stepper                                          |
| NextButton\*                                         | (handleNext: () => void) => React.JSX.Element |                                                                                                                                                       | A function returning a JSX element for the Next button                           |
| BackButton\*                                         | (handleBack: () => void) => React.JSX.Element |                                                                                                                                                       | A function returning a JSX element for the Back button                           |
| SaveAsDraftButton                                    | React.JSX.Element                             |                                                                                                                                                       | A function returning a JSX element for the Save as Draft button                  |
| children                                             | React.ReactNode                               | -                                                                                                                                                     | Additional content as React children                                             |
| subStepperActiveColor                                | string                                        | 'blue'                                                                                                                                                | Color for active sub-stepper elements                                            |
| subStepperInactiveColor                              | string                                        | 'grey'                                                                                                                                                | Color for inactive sub-stepper elements                                          |
| IconInactive                                         | React.JSX.Element                             |                                                                                                                                                       | Icon for inactive steps in the main stepper                                      |
| IconInProgress                                       | React.JSX.Element                             |                                                                                                                                                       | Icon for steps in progress in the main stepper                                   |
| IconComplete                                         | React.JSX.Element                             |                                                                                                                                                       | Icon for completed steps in the main stepper                                     |
| containerStyle                                       | React.CSSProperties                           | `{`<br>`boxSizing: 'border-box',`<br>`width: '100%',`<br>`padding: '10px'`<br>`}`                                                                     | Custom CSS properties for the outer most container                               |
| containerBtnStyle                                    | React.CSSProperties                           | `{`<br>`display: 'flex',`<br>`justifyContent: 'space-between'`<br>`}`                                                                                 | Custom CSS properties for the button container                                   |
| containerSubStepperStyle                             | React.CSSProperties                           | `{`<br>`display: 'flex',`<br>`marginTop: '10px',`<br>`padding: '5px'`<br>`}`                                                                          | Custom CSS properties for the sub-stepper container                              |
| lineSubStepperStyle                                  | React.CSSProperties                           | `{`<br>`background: 'gray',`<br>`height: '2px',`<br>`width: '100%',`<br>`borderRadius: '5px',`<br>`marginLeft: '5px',`<br>`marginRight: '5px'`<br>`}` | Custom CSS properties for the sub-stepper line                                   |
| containerMainStepperStyle                            | React.CSSProperties                           | `{`<br>`display: 'flex'`<br>`}`                                                                                                                       |
| Custom CSS properties for the main-stepper container |
| lineMainStepperStyle                                 | React.CSSProperties                           | `{`<br>`display: 'flex',`<br>`flex: 1,`<br>`height: '1px',`<br>`marginLeft: '4px',`<br>`marginRight: '4px',`<br>`backgroundColor: 'grey'`<br>`}`      | Custom CSS properties for the main-stepper line                                  |
| fontStyle                                            | React.CSSProperties                           | default `<p>` tag style                                                                                                                               | Custom CSS properties for the text font                                          |
| iconCompleteColor                                    | string                                        | 'blue'                                                                                                                                                | Color for the icon of completed steps (\*works only when default icon is used)   |
| iconInactiveColor                                    | string                                        | 'grey'                                                                                                                                                | Color for the icon of inactive steps (\*works only when default icon is used)    |
| iconInProgressColor                                  | string                                        | 'blue'                                                                                                                                                | Color for the icon of steps in progress (\*works only when default icon is used) |
| backPreviousMainStep                                 | boolean                                       | true                                                                                                                                                  | Whether you want to go back to the main step or not.                             |
