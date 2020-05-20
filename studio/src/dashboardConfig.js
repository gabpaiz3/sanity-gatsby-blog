export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec5ba0735b58f13a90f5012',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aczuuf6m',
                  apiId: '9cafe18e-4be2-412d-96ed-d5191f07ba06'
                },
                {
                  buildHookId: '5ec5ba086fe15b01974f8d13',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-masgjgvv',
                  apiId: 'bd4bd132-93f0-4aea-9462-3d267ca380eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabpaiz3/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-masgjgvv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
