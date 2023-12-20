const { verifyToken } = require("../services/jwt.service");
const user = require("../services/user.services");

const authenticate = async (req, res, next) => {
  // Get token stored in the client header after sign in
  const authHeaders = req.header("Authorization"); //req.headers.authorization
  const token =
    authHeaders && authHeaders.substring(0, 7) === "Bearer "
      ? authHeaders.replace("Bearer ", "")
      : req.cookies?.token;

  // Checks if a token exists and returns a message if none was found
  if (!token) return sendResponse(res, 403, false, "Login to continue");
  //  if (!token || token === null) return res.status(400).json({
  //     message: 'You must be signed in to view content',
  //     success: false
  // })

  // Decode the user token referenced in the request header?cookie to verify its authenticity by checking the token against the secret key. If the token is valid, we should get the user credentials associated with that token.
  //   const decoded = <JwtPayload | string>await tokenHandler.verify(token)
  const payload = verifyToken(token);

  // If secret key doesn't recognise the token, the user isn't authenticated and asked to try signing in again to get a new token
  //   if (decoded === 'expired') return sendResponse(res, 403, false, 'Session expired. Sign in again to continue.')
  //     if (decoded === 'invalid') return sendResponse(res, 401, false, 'Invalid token.')
  if (!payload) {
    return res.status(400).json({
      message: "User authentication failed, please try signing in again",
      success: false,
    });
  }

  // The secretkey recognises the token and gives the payload associated with it for the database to be checked to see if a user exists with the id require () the payload. A payload is a user's unique sign in credentials.
  //   const user = await userService.getOne({ _id: (decoded as JwtPayload)._id})
  const validUser = await user.find({ _id: payload.id });
  // If no user is found with the payload (credentials), authentication fails.
  //   if (!user) return sendResponse(res, 404, false, 'User not found')
  if (!validUser) {
    return res.status(400).json({
      message: "User not found",
      success: false,
    });
  }

  // If the user exists on the database, they're authentic users and are granted access to protected content
  //   console.log('logged in user:', user);
  console.log(`Authentication for ${validUser.username} successful`);

  // The user is then added to the request so all their requests will be associated with their credentials.
  //    req.user = user;
  req.user = validUser;
  next();
};

module.exports = authenticate;
