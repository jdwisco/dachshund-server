import { Router } from 'express';

export default () => {
  const api = Router();

  // API metadata at root
  api.get('/', (req, res) => {
    res.json({
      name: 'Dachshund!',
      version: '0.1',
      description: 'API'
    });
  });

  return api;
}
