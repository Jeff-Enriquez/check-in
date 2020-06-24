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

  moveToQueue = async (uid, patient) => {
    this.database.collection('CheckIn').doc(uid).update({
      patients: app.firestore.FieldValue.arrayRemove(patient)
    })
    this.database.collection('Queue').doc(uid).update({
      patients: app.firestore.FieldValue.arrayUnion(patient)
    })
  }

  addNewList = (uid, data) => {
    this.database.collection('CheckIn').doc(uid).update({
      patients: data
    })
    this.database.collection('Queue').doc(uid).update({
      patients: {}
    })
  }

  removeFromQueue = (uid, patient) => 
    this.database.collection('Queue').doc(uid).update({
      patients: app.firestore.FieldValue.arrayRemove(patient)
    })

}

export default Firebase