import React from 'react'

const Landing = React.lazy(() => import('./layout/Landing'))

const routes = [
    { path: '/', name: 'Landing Page', exact: true, component: Landing}
]

export default routes