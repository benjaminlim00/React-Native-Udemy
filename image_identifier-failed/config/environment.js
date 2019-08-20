var environments = {
  staging: {
    FIREBASE_API_KEY: "XXXX",
    FIREBASE_AUTH_DOMAIN: "XXXX",
    FIREBASE_DATABASE_URL: "XXXX",
    FIREBASE_PROJECT_ID: "XXXX",
    FIREBASE_STORAGE_BUCKET: "XXXX",
    FIREBASE_MESSAGING_SENDER_ID: "XXXX",
    GOOGLE_CLOUD_VISION_API_KEY: "----"
  }
};

function getEnvironment(env) {
  return environments[env];
}
var Environment = getEnvironment();

export default Environment;
