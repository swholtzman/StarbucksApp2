// HandleFormSubmit.js
import Amplify from 'aws-amplify';
import awsExports from '../src/aws-exports';

Amplify.configure(awsExports);

import { Auth } from 'aws-amplify';
console.log(Auth); // Check if Auth is undefined

export const handleSignUp = async ({ email, password, fName, lName }) => {
  try {

    const signUpResponse = await Auth.signUp({
      username: email, 
      password: password,
      attributes: {
        email: email, 
        given_name: fName, 
        family_name: lName,
      },
      autoSignIn: { enabled: true },
    });

    console.log("Sign up successful with userId:", signUpResponse.userSub);
    return signUpResponse;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error; 
  }
};
