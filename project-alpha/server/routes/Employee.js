import { Router } from 'express';

const EmployeeRouter = Router();

// ----------------------------------------------------
// stuff go here
// ----------------------------------------------------

EmployeeRouter.get('/test', (req, res) => {
  res.json({ message: 'Employee router connected' });
});

export default EmployeeRouter;