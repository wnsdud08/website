import type { FC } from 'hono/jsx'
import Navbar from './components/navbar.js'

const Layout: FC = (props) => {
  return (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body>
            <Navbar />
            <main>{props.children}</main>
        </body>
    </html>
  )
};

export default Layout