import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/Auth/auth.route';
import { productRoutes } from '../modules/Product/product.route';
import { salesHistoryRoutes } from '../modules/salesHistory/salesHistory.route';
import { maintenanceAndServicingRoutes } from '../modules/MaintenancAndServicing/maintenancAndServicing.route';


const router = Router();

const moduleRoutes = [
{
  path:'/products',
  route:productRoutes,
},
{
  path:'/history',
  route:salesHistoryRoutes,
},
{
  path:'/user',
  route:userRoutes,
},
{
  path:'/auth',
  route:authRoutes,
},
{
  path:'/maintenance-servicing',
  route:maintenanceAndServicingRoutes,
},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;
