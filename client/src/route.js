import React from 'react'

const Landing = React.lazy(() => import('./layout/Landing'))
const shopDisplay = React.lazy(() => import('./layout/shopDisplay'))

const routes = [
    { path: '/', name: 'Landing Page', exact: true, component: Landing},
    { path: '/shop/:name', name: 'Shop Display', exact: true, component: shopDisplay}
]

export default routes