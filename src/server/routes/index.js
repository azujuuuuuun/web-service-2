const express = require('express');

const passport = require('../passport');
const authRouter = require('./auth');
const uploadRouter = require('./upload');
const usersRouter = require('./users');
const itemsRouter = require('./items');
const tagsRouter = require('./tags');
const notificationsRouter = require('./notifications');
const searchRouter = require('./search');

const router = express.Router();

const opts = { session: false };

// signup
router.post('/signup', authRouter.signup);

// login
router.post('/login', authRouter.login);

// auth
router.post('/auth', passport.authenticate('jwt', opts), authRouter.auth);

// upload
router.use('/upload', uploadRouter);

// users
router.get('/api/users/:username', usersRouter.getUser);
router.get('/api/users/', usersRouter.getUsers);
router.put(
  '/api/users/password',
  passport.authenticate('jwt', opts),
  usersRouter.updatePasspord,
);
router.put(
  '/api/users',
  passport.authenticate('jwt', opts),
  usersRouter.updateUser,
);
router.post(
  '/api/users/:followedId/follow',
  passport.authenticate('jwt', opts),
  usersRouter.follow,
);
router.delete(
  '/api/users/:followedId/unfollow',
  passport.authenticate('jwt', opts),
  usersRouter.unfollow,
);

// items
router.post(
  '/api/items',
  passport.authenticate('jwt', opts),
  itemsRouter.createItem,
);
router.get('/api/items', itemsRouter.getItems);
router.get('/api/items/:itemId', itemsRouter.getItem);
router.post(
  '/api/items/:itemId/like',
  passport.authenticate('jwt', opts),
  itemsRouter.likeItem,
);
router.delete(
  '/api/items/:itemId/unlike',
  passport.authenticate('jwt', opts),
  itemsRouter.unlikeItem,
);
router.post(
  '/api/items/:itemId/stock',
  passport.authenticate('jwt', opts),
  itemsRouter.stockItem,
);
router.delete(
  '/api/items/:itemId/unstock',
  passport.authenticate('jwt', opts),
  itemsRouter.unstockItem,
);
router.post(
  '/api/items/:itemId/comments',
  passport.authenticate('jwt', opts),
  itemsRouter.comment,
);

// tags
router.get('/api/tags', tagsRouter.getTags);
router.get('/api/tags/:tagName', tagsRouter.getTag);
router.post(
  '/api/tags/:tagId/follow',
  passport.authenticate('jwt', opts),
  tagsRouter.followTag,
);
router.post(
  '/api/tags/:tagId/unfollow',
  passport.authenticate('jwt', opts),
  tagsRouter.unfollowTag,
);

// notifications
router.put(
  '/api/notifications',
  passport.authenticate('jwt', opts),
  notificationsRouter.createNotifications,
);

// search
router.get('/api/search', searchRouter.search);

module.exports = router;
