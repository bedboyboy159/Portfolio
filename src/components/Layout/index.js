import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import './index.scss'

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>"Waste your money and you're only out of money, but waste your time and you've lost a part of your life." - Michael Leboeuf</span>
            <Outlet/>
            
            <span className='tags bottom-tags'>&lt;body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span>
            
        </div>
    </div>
    )
}

export default Layout