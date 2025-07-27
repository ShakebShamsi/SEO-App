import {Link} from 'react-router-dom'
import Seo from '../SEO/Seo'

const Navbar = () => {
  return (
    <div>
      <Seo title="Navbar" description="Navigate through our website using the navbar." />
        <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </nav>
    </div>
  )
}

export default Navbar