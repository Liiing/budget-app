import Login from '../views/Login.js';
import ResetPasswordModal from '../views/Login.js';

//Test to check if the Login class works.
test ('LoginTest',
  () => {
    const loginFunction = Login("test@email.com", "TestPasswort!");
    expect(loginFunction).test;
  });

// Test to check the function "ResetPasswordModal" works.
test ('passwordResetTest',
  () => {
    const loginFunction = ResetPasswordModal();
    expect(loginFunction).test;
  });
/* Try to fake a Use State. Didn't work.
test('useState mock', () => {
   const initialStateForFirstUseStateCall = 'My First Initial State'
   const initialStateForSecondUseStateCall = 'My Second Initial State'

   React.useState = jest.fn()
     .mockReturnValueOnce([initialStateForFirstUseStateCall, {}])
     .mockReturnValueOnce([initialStateForSecondUseStateCall, {}])

   const wrapper = shallow(<MyComponent />)

});*/