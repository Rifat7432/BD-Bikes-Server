"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const product_route_1 = require("../modules/Product/product.route");
const salesHistory_route_1 = require("../modules/salesHistory/salesHistory.route");
const maintenancAndServicing_route_1 = require("../modules/MaintenancAndServicing/maintenancAndServicing.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/products',
        route: product_route_1.productRoutes,
    },
    {
        path: '/history',
        route: salesHistory_route_1.salesHistoryRoutes,
    },
    {
        path: '/user',
        route: user_route_1.userRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.authRoutes,
    },
    {
        path: '/maintenance-servicing',
        route: maintenancAndServicing_route_1.maintenanceAndServicingRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
