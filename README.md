# poc-monorepo

```
  yarn bootstrap      // install
  yarn story          // run story book
  yarn dev:reactapp   // run app in dev mode
  yarn dev:nextjsapp  // run another app in dev mode


                               [MONOREPO]
                                  │
Applications folder --------->    ├── apps
  application consuming           │   ├── nextjs-app
  shared library                  │   │   ├── package.json
                                  │   │   └── pages/
                                  │   │ 
                                  │   └── react-app
                                  │       ├── README.md
                                  │       ├── babel.config.js
                                  │       ├── package.json
                                  │       ├── server.js
                                  │       ├── src/
                                  │       ├── webpack.config.js
                                  │       └── yarn.lock
                                  │
shared components folder ---->    ├── components
                                  │   └── my-button
                                  │       ├── package.json
                                  │       ├── src/
                                  │       └── yarn.lock
                                  │
shared utility folder ------->    ├── utils
                                  │   └── get-message
                                  │       ├── package.json
                                  │       └── src/
                                  │
                                  ├── lerna.json
                                  ├── package.json
                                  └── yarn.lock

```
