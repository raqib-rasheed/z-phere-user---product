export const sidebarMenus = {
	userManagement: {
		id: 'userManagement',
		text: 'User Managements',
		path: 'user-management',
		icon: 'People',
		subMenu: {
			user: {
				id: 'userManagementUser',
				text: 'User',
				path: 'user-management/user',
				icon: 'Dot',
			},
			role: {
				id: 'userManagementRole',
				text: 'Role',
				path: 'user-management/role',
				icon: 'Dot',
			},
			client: {
				id: 'userManagementClient',
				text: 'Client',
				path: 'user-management/client',
				icon: 'Dot',
			},
		},
	},
	productsSystem: {
		id: 'productsSystem',
		text: 'Products System',
		path: 'products-system',
		icon: 'Cart2',
		subMenu: {
			productAndServices: {
				id: 'productsSystemProductAndServices',
				text: 'Product & Services',
				path: 'products-system/product-and-services',
				icon: 'Dot',
			},
			productStock: {
				id: 'productsSystemProductStock',
				text: 'Product Stock',
				path: 'products-system/product-stock',
				icon: 'Dot',
			},
		},
	},
};

export const componentsMenu = {
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap',
		icon: 'Extension',
	},
	notification: {
		id: 'notification',
		text: 'Notification',
		path: 'notifications',
		icon: 'NotificationsNone',
	},
	hooks: {
		id: 'hooks',
		text: 'Hooks',
		path: 'hooks',
		icon: 'Anchor',
	},
};

export const productsMenu = {
	companyA: {
		id: 'companyA',
		text: 'Company A',
		path: 'grid-pages/products',
		subMenu: null,
	},
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
