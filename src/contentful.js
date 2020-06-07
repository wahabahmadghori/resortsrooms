const {createClient} = require("contentful");

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});