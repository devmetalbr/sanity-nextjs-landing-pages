export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f2fc15cf5cc1fe34fffd999',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w4djipnz',
                  apiId: '82a36789-7fbc-4277-905f-7dd96bb847ed'
                },
                {
                  buildHookId: '5f2fc15cbed268de07703d1c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-m8128aer',
                  apiId: '034b1783-653d-4484-bf00-4d66b76981e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devmetalbr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-m8128aer.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
