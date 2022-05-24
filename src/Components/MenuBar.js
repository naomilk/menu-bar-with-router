import { Link } from 'react-router-dom';

export function MenuBar () {
    const toggle = () => {
        const slideOver = document.getElementById('slide-over');
        if(slideOver.classList.contains('translate-x-[100vw]')) {
            return slideOver.classList.remove('translate-x-[100vw]')
        } else {
            return slideOver.classList.add('translate-x-[100vw]')
        }
    };

    const closeMenu = () => {
        const slideOver = document.getElementById('slide-over');
        slideOver.classList.add('translate-x-[100vw]')
    }

    return (
        <div>
            {/* slideover */}
            <div className="overflow-x-hidden flex justify-between fixed top-0 left-0 w-screen h-screen bg-sky-50 translate-x-[100vw] ease-in-out duration-300" id="slide-over">
                <p>henlo frens</p>
                <div onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            {/* menu */}
            <div className="absolute bottom-0 w-screen bg-pink-50">
                <ul className="flex justify-around py-2 text-sm text-slate-800">
                    <li onClick={closeMenu}><Link to='/'>Home</Link></li>
                    <li onClick={closeMenu}><Link to='/contact'>Contact</Link></li>
                    <li onClick={closeMenu}><Link to='/signup'>Sign-up</Link></li>
                    <li onClick={toggle}>My Membership</li>
                </ul>
            </div>
        </div>
    )
}