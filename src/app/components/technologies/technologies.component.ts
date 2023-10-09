import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  technologies = {
    front: [
      {
        name: 'React',
        icon: 'https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png',
        link: 'https://reactjs.org/'
      },
      {
        name: 'Angular',
        icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
        link: 'https://angular.io/'
      },
      {
        name: 'Vue',
        icon: 'https://static-00.iconduck.com/assets.00/vue-icon-512x439-f6q4zral.png',
        link: 'https://vuejs.org/'
      },
      {
        name: 'Javascript vanilla',
        icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png',
        link: 'https://www.javascript.com/'
      },
      {
        name: 'Typescript',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png?f=webp',
        link: 'https://www.typescriptlang.org/'
      }
    ],
    back: [
      {
        name: 'NodeJS',
        icon: 'https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png',
        link: 'https://nodejs.org/en/'
      },
      {
        name: 'Express',
        icon: 'data:image/png;base64,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',
        link: 'https://expressjs.com/'
      },
      {
        name: 'SQL',
        icon: 'https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png',
        link: 'https://www.mysql.com/'
      },
      {
        name: 'GraphQL',
        icon: 'https://cdn.icon-icons.com/icons2/3053/PNG/512/graphql_playground_macos_bigsur_icon_190105.png',
        link: 'https://graphql.org/'
      }
    ],
    frameworks: [
      {
        name: 'Bootstrap',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
        link: 'https://getbootstrap.com/'
      },
      {
        name: 'Materialize',
        icon: 'https://seeklogo.com/images/M/materialize-logo-0FCAD8A6F8-seeklogo.com.png',
        link: 'https://materializecss.com/'
      },
      {
        name: 'Material UI',
        icon: 'https://static-00.iconduck.com/assets.00/material-ui-icon-512x406-fhnu85xg.png',
        link: 'https://material-ui.com/'
      },
      {
        name: 'Tailwind',
        icon: 'https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png',
        link: 'https://tailwindcss.com/'
      }
    ],
    cloud: [
      {
        name: 'Heroku',
        icon: 'https://static-00.iconduck.com/assets.00/heroku-icon-2048x2048-4rs1dp6p.png',
        link: 'https://www.heroku.com/',
        alert: 'Basics'
      },
      {
        name: 'AWS',
        icon: 'https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png',
        link: 'https://aws.amazon.com/',
        alert: 'In progress...'
      },
      {
        name: 'Microsoft Azure',
        icon: 'https://arunpotti.files.wordpress.com/2021/12/microsoft_azure.svg_.png',
        link: 'https://azure.microsoft.com/en-us/',
        alert: 'In progress...'
      },
      {
        name: 'Vercel',
        icon: 'https://logowik.com/content/uploads/images/vercel1868.jpg',
        link: 'https://vercel.com/',
        alert: 'Intermediate'
      },
      {
        name: 'Railway',
        icon: 'https://railway.app/brand/logo-dark.png',
        link: 'https://railway.app/',
        alert: 'Intermediate'
      }
    ],
    others: [
      {
        name: 'Git',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png',
        link: 'https://git-scm.com/'
      },
      {
        name: 'GitHub',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png',
        link: ''
      },
      {
        name: 'Postman',
        icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
        link: 'https://www.postman.com/'
      },
      {
        name: 'Slack',
        icon: 'https://cdn.iconscout.com/icon/free/png-256/slack-226533.png',
        link: 'https://slack.com/'
      },
      {
        name: 'Jira',
        icon: 'https://static-00.iconduck.com/assets.00/jira-icon-1024x1024-d3lloaih.png',
        link: 'https://www.atlassian.com/software/jira'
      },
      {
        name: 'Swagger',
        icon: 'https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png',
        link: 'https://swagger.io/'
      }
    ]
  }
}
