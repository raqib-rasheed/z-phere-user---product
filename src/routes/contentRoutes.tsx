import React, { lazy } from 'react';
import { sidebarMenus } from '../menu';

const APP = {
	USER_MANAGEMENT: {
		USER: lazy(() => import('../pages/presentation/user-management/User')),
		ROLE: lazy(() => import('../pages/presentation/user-management/Role')),
		CLIENT: lazy(() => import('../pages/presentation/user-management/clients/Client')),
	},
	PRODUCT_SYSTEM: {
		ROLE: lazy(() => import('../pages/presentation/product-system/ProductAndServices')),
		CLIENT: lazy(() => import('../pages/presentation/product-system/ProductStock')),
	},
};

const presentation = [
	// App > User management
	{
		path: '/',
		element: <APP.USER_MANAGEMENT.USER />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.user.path,
		element: <APP.USER_MANAGEMENT.USER />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.role.path,
		element: <APP.USER_MANAGEMENT.ROLE />,
		exact: true,
	},
	{
		path: sidebarMenus.userManagement.subMenu.client.path,
		element: <APP.USER_MANAGEMENT.CLIENT />,
		exact: true,
	},

	// App > Product System
	{
		path: sidebarMenus.productsSystem.subMenu.productAndServices.path,
		element: <APP.PRODUCT_SYSTEM.ROLE />,
		exact: true,
	},
	{
		path: sidebarMenus.productsSystem.subMenu.productStock.path,
		element: <APP.PRODUCT_SYSTEM.CLIENT />,
		exact: true,
	},
	// App > System Setup
];

const contents = [...presentation];

export default contents;
