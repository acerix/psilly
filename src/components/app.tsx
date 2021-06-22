import { FunctionalComponent, h } from 'preact'
import { Route, Router } from 'preact-router'

import Home from '../routes/home'
import About from '../routes/about'
import Bylaws from '../routes/bylaws'
import Contact from '../routes/contact'
import Art from '../routes/art'
import Polygons from '../routes/art/polygons'
import NotFound from '../routes/notfound'
import Header from './header'
import Footer from './footer'

const App: FunctionalComponent = () => {
    return (
        <div id="preact_root">
            <Header />
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/bylaws" component={Bylaws} />
                <Route path="/contact" component={Contact} />
                <Route path="/art/" component={Art} />
                <Route path="/art/polygons" component={Polygons} />
                <NotFound default />
            </Router>
            <Footer />
        </div>
    )
}

export default App
