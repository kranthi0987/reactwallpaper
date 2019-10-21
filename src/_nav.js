export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
            },
        },
        {
            title: true,
            name: 'Components',
            wrapper: {
                element: '',
                attributes: {},
            },
        },
        {
            name: 'Base',
            url: '/base',
            icon: 'icon-puzzle',
            children: [
                {
                    name: 'Cards',
                    url: '/base/cards',
                    icon: 'icon-puzzle',
                },
                {
                    name: 'Forms',
                    url: '/base/forms',
                    icon: 'icon-puzzle',
                },
            ],
        },
        {
            name: 'Buttons',
            url: '/buttons',
            icon: 'icon-cursor',
            children: [
                {
                    name: 'Buttons',
                    url: '/buttons/buttons',
                    icon: 'icon-cursor',
                },
                {
                    name: 'Brand Buttons',
                    url: '/buttons/brand-buttons',
                    icon: 'icon-cursor',
                },
            ],
        },
        {
            name: 'Pages',
            url: '/pages',
            icon: 'icon-star',
            children: [
                {
                    name: 'Login',
                    url: '/login',
                    icon: 'icon-star',
                },
                {
                    name: 'Register',
                    url: '/register',
                    icon: 'icon-star',
                },
                {
                    name: 'Error 404',
                    url: '/404',
                    icon: 'icon-star',
                },
                {
                    name: 'Error 500',
                    url: '/500',
                    icon: 'icon-star',
                },
            ],
        },
    ],
};
