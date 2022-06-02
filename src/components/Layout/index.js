import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>&lt;div></span>
            <Outlet/>
            
            <span className='tags bottom-tags'>&lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/div&gt;</span>
            </span>
            
        </div>
    </div>
    )
}

export default Layout