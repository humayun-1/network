import React, { useState } from 'react'
import Button from './Common/Button'
import { useNavigate } from 'react-router-dom'
import Svgs from './Svgs';

const Header = () => {
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false);
    const [dropdownUpload, setDropdownUpload] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false)
    return (
        <div className='w-full sticky top-0 bg-white z-[100] shadow-md'>
            <div className='container py-[1.5rem]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[2rem]'>
                        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} className="lg:w-auto w-[70%] cursor-pointer" onClick={() => {
                            navigate('/home')
                        }} />
                        <div
                            className={`lg:flex hidden items-center gap-4 text-sm nav-bar-menu ${mobileMenu ? 'nav-toggle' : ''}`}>
                            <p onClick={() => { navigate('/home') }}>Discover</p>
                            <p onClick={() => { navigate('/find-work') }}>Find Work</p>
                            <p onClick={() => { navigate('/hire-developers') }}>Hire Developers</p>
                            <p onClick={() => { navigate('/courses') }}>Courses</p>
                            <p onClick={() => { navigate('/community') }}>Community</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 lg:w-auto w-full'>
                        <div className='lg:hidden block' onClick={() => { setMobileMenu(!mobileMenu) }}>
                            <Svgs.HamburgerMenu />
                        </div>

                        <div className='flex items-center gap-2 relative' onClick={() => { setDropdown(!dropdown) }}>
                            <img src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="h-[2.8rem] w-[2.8rem] rounded-full cursor-pointer" />
                            <h2 className='font-semibold lg:block hidden cursor-pointer'>Anas Shafi</h2>
                            <div className='cursor-pointer'><Svgs.DownArrow /></div>
                            {
                                dropdown && <div className='absolute top-full rounded-lg right-0 w-[17rem] shadow-lg bg-white'>
                                    <div className='p-3'>
                                        <div className='px-4 py-3 rounded-lg flex items-center bg-[#35424B] gap-5 text-white'>
                                            <div className='h-[3rem] w-[3rem] bg-[#80888E] rounded-full flex items-center justify-center'>
                                                <Svgs.Crown />
                                            </div>
                                            <div className='cursor-pointer' onClick={() => {
                                                navigate('/verify')
                                            }}>
                                                <h2 className='text-sm font-semibold'>Limited Account</h2>
                                                <p className='text-xs underline'>Upgrade Now</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='border-gray-300' />
                                    <div className='p-3 text-[#8E8E8E] text-sm'>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown'>
                                            <Svgs.Editprofile />
                                            <p>Edit Profile</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown' onClick={() => {
                                            navigate('/my-jobs')
                                        }}>
                                            <Svgs.Jobs />
                                            <p>My Jobs</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown'>
                                            <Svgs.Learning />
                                            <p>My Learning</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown'>
                                            <Svgs.Cog />
                                            <p>Account Settings</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown'>
                                            <Svgs.Logout />
                                            <p>Logout</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>

                        {/* <button className='px-4 py-2 border border-transparent hover:border-gray-500 text-sm rounded-md' onClick={() => { navigate('/login') }}>Sign In</button> */}

                        <div className='flex items-center gap-2 relative' onClick={() => { setDropdownUpload(!dropdownUpload) }}>
                            <div className='px-4 py-3 bg-[#248489] text-white rounded-lg flex items-center gap-1'>
                                <h2 className='font-semibold lg:block hidden cursor-pointer text-sm'>Upload</h2>
                                <div className='cursor-pointer'><Svgs.DownArrow fill='white' /></div>
                            </div>
                            {
                                dropdownUpload && <div className='absolute top-full rounded-lg right-0 w-[12rem] shadow-lg bg-white'>
                                    <div className='p-3 text-[#8E8E8E] text-sm'>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown' onClick={() => {
                                            navigate('/upload-portfolio')
                                        }}>
                                            <Svgs.Editprofile />
                                            <p>Add Portfolio</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown' onClick={() => {
                                            navigate('/create-job')
                                        }}>
                                            <Svgs.Jobs />
                                            <p>Post Job</p>
                                        </div>
                                        <div className='flex items-center gap-3 py-2 hover-dropdown' onClick={() => {
                                            navigate('/ask-question')
                                        }}>
                                            <Svgs.Learning />
                                            <p>Ask Question</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header