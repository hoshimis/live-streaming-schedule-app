// Import the functions you need from the SDKs you need
// import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC8pBu-Yd8PBfm8pSxrsANPlnEnh7b0SzA',
  authDomain: 'livestreamingscheduleapp.firebaseapp.com',
  projectId: 'livestreamingscheduleapp',
  storageBucket: 'livestreamingscheduleapp.appspot.com',
  messagingSenderId: '452990512264',
  appId: '1:452990512264:web:b5ceedf33131bccf34433d',
  measurementId: 'G-V85KV45500'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export const auth = getAuth()
