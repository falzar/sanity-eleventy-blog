export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e957b3df46a220415bf4d36',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-myjw9bw1',
                  apiId: 'f5b04ffa-31a8-49bf-9860-a2bf51a58fee'
                },
                {
                  buildHookId: '5e957b3d3730ab4d1dd1fe6c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1rpopc4k',
                  apiId: '174b3c0d-3873-4035-a05e-b8c22a3ad864'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/falzar/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1rpopc4k.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
