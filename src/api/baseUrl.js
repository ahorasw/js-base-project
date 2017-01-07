export default function getBaseUrl(){

  console.log(window.location.hostname);//eslint-disable-line no-console
  
  const inDevelopment = window.location.hostname === 'localhost';

  return inDevelopment? 'http://localhost:3001/' : '/';
  
}
