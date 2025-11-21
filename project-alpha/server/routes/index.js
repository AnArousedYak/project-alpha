import { Router } from 'express';
import EmployeeRouter from './Employee.js';

const AppRouter = Router();

AppRouter.use('/employees', EmployeeRouter);

export default AppRouter;