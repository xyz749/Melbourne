// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the authentication service
  const auth = firebase.auth();
  
  // Get the sign-in form
  const signInForm = document.getElementById('signInForm');
  
  // Add an event listener to the sign-in form
  signInForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission
      
      // Get user's email and password from the form
      const email = signInForm.email.value;
      const password = signInForm.password.value;
  
      // Sign in the user with email and password
      auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Signed in successfully
              const user = userCredential.user;
              console.log('User signed in:', user);
              // Redirect to dashboard or display success message
          })
          .catch((error) => {
              // Handle sign-in errors
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error('Sign-in error:', errorMessage);
              // Display error message to the user
          });
  });
  