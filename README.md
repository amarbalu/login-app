# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Steps to execute`

1. npm install
2. npm start
3. App will start running at https://localhost:3000/
4. By default it will be navigated to https://localhost:3000/login

## `Functionalities`
  1.  A login page, on click of login use gmail or facebook API to allow user to login.
![image](https://user-images.githubusercontent.com/37163292/155758753-6e8e7501-80a0-4c78-8aa4-d5fd0cf07f6f.png)

 
  2. Once logged in, display user details(which you get from facebook or gmail) at the header of the page.

      Right top - User name will be displayed - on click of user name, the logout option will be there for the user to logout from the current session.

 ![image](https://user-images.githubusercontent.com/37163292/155758826-99194683-f914-4cb7-855b-981fa7dd33e2.png)


  3. Create two components and use react router to render those components based on the router path(user name should be displayed right top with logout option in every page)

·        The first component will have some static table data
![image](https://user-images.githubusercontent.com/37163292/155758866-b138b4ad-9339-41b4-9467-28478e94cc83.png)


·        The second component will have some json data.
![image](https://user-images.githubusercontent.com/37163292/155758936-288627dc-472a-4a28-9392-11258c83a8d9.png)



  4. Enable the idle timeout of 60 seconds for the logged in user. After 59 seconds, the prompt will get enabled for the user with message "Do want to continue?" with "Continue" button. if there is no user response, then automatic logout should happen after 60 seconds.
  ![image](https://user-images.githubusercontent.com/37163292/155759332-412e059d-cc05-418c-a7b3-bc0b71f35fc8.png)




