const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-jfqhbg51b1ae",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2r8ibk01p7.execute-api.us-east-1.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_exRZvJbg6",
    APP_CLIENT_ID: "5c1k0n23gonlnfe2hpp2fagfod",
    IDENTITY_POOL_ID: "us-east-1:6525a657-18cc-494b-8df4-63d96c37d20d",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51HOZUsGAbTLVk1AnPe1GfiAwuTFFeAXfPRn2hJiACZns6nMhFWBNhTWIoOs48bGgo2lPYz0QZvUwjkzvS1qB6Lia00TI7Bk9XB",
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-serverlessdeploymentbucket-1fdzfkxbggu8c",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1zq8ldyiyl.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_LLSZoU6R6",
    APP_CLIENT_ID: "7k6c55dp0rvf9rs4ijreipjbjk",
    IDENTITY_POOL_ID: "us-east-1:9bda84be-333f-40cf-ac49-63dee21cdad6",
  },
  STRIPE_KEY:
    "pk_test_51HOZUsGAbTLVk1AnPe1GfiAwuTFFeAXfPRn2hJiACZns6nMhFWBNhTWIoOs48bGgo2lPYz0QZvUwjkzvS1qB6Lia00TI7Bk9XB",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
