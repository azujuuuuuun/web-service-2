const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const db = require('./models');

const { User } = db;

const opts = {
  secretOrKey: 'shhhhh',
  jwtFromRequest: ExtractJwt.fromHeader('token'),
};

passport.use(
  // eslint-disable-next-line camelcase
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.userId);
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (e) {
      return done(e, false);
    }
  }),
);

module.exports = passport;
