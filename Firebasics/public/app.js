const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.GoogleAuthProvider();

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `
      <h3>Wagwan, ${user.displayName}!</h3>
      <p>User ID: ${user.uid}/p>
    `;
  } else {
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
  }
});

const db = firebase.firestore();

const createPog = document.getElementById('createPog');
const pogList = document.getElementById('pogList');

let pogRef;
let unsubscribe;

auth.onAuthStateChanged(user => {
  if (user) {
    pogRef = db.collection('pogs');

    createPog.onclick = () => {
      const { serverTimestamp } = firebase.firestore.FieldValue;

      pogRef.add({
        uid: user.uid,
        name: faker.commerce.productName(),
        createdAt: serverTimestamp(),
      });
    }

    unsubscribe = pogRef
      .where('uid', '==', user.uid)
      .orderBy('createdAt')
      .onSnapshot(querySnapshot => {
        const items = querySnapshot.docs.map(doc => {
          return `<li>${doc.data().name}</li>`
        });

        pogList.innerHTML = items.join('');
      });
  } else {
    unsubscribe && unsubscribe();
  }
});