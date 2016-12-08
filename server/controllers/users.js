let env = process.env.NODE_ENV || 'development';

import { Router } from 'express';

export default () => {
  const user = Router();

  const fetchUsers = (req, res, options) => {
    User.fetchAll().fetch()
      .then((user) => {
        console.log(user)
        //res.json(users: users.toJSON());
      })
      .catch((error) => {
        res.json('error');
      })
  }
 
  user.get('/', (req, res) => {
    fetchUsers(req, res);
  })

  return user;
}
