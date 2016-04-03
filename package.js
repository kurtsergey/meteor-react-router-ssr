Package.describe({
    name: 'kurtsergey:react-router-ssr',
    version: '2.2.0',
    summary: 'Server-side rendering for react-router and react-meteor-data rehydratating Meteor subscriptions',
    git: 'https://github.com/thereactivestack/meteor-react-router-ssr.git',
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.use([
        'ecmascript',
        'minimongo@1.0.3',
        'meteorhacks:fast-render@2.13.0',
        'meteorhacks:inject-data@2.0.0'
    ]);

    api.use('webapp@1.2.0', 'server');
    api.use('mongo@1.0.0', 'server');
    api.use('autopublish@1.0.0', 'server', {weak: true});

    api.use('tmeasday:publish-counts@0.7.0', 'server', {weak: true});
    api.use(['routepolicy@1.0.9'], ['server']);

    api.export(['ReactRouterSSR']);

    api.mainModule('lib/client.jsx', 'client');
    api.mainModule('lib/server.jsx', 'server');
});
