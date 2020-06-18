import app from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
    this.database = app.firestore()
  }

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  getCheckIn = async uid => {
    const list = await this.database.collection('CheckIn').doc(uid).get()
    return list.data()
  }

  getQueue = async uid => {
    const list = await this.database.collection('Queue').doc(uid).get()
    return list.data()
  }

  setCheckIn = (uid, data) => 
    this.database.collection('List').doc(uid).update({
      patients: data,
    })

}

export default Firebase