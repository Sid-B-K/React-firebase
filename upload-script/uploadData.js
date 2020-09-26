const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://fir-react-example-c9de9.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);
firestoreService.restore("../data.json");