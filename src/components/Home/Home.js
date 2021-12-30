import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import PostBanner1 from '../../images/post-banner-1.png';
import PostBanner2 from '../../images/post-banner-2.png';
import PostBanner3 from '../../images/post-banner-3.png';
import User4 from '../../images/user4.png'
import User3 from '../../images/user3.png'
import User2 from '../../images/user2.png'
import User1 from '../../images/user1.png'
import Article from '../../images/icon/Article.png';
import Education from '../../images/icon/Education.png';
import Meetup from '../../images/icon/Meetup.png';
import Job from '../../images/icon/Job.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='banner'>
                    <div className='banner-title'>
                        <h1>Computer Engineering</h1>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </div>
                <div className=''>
                    <div className='post1'>
                        <img src={PostBanner1} alt="" />
                        <div className='post1-title'>
                            <img style={{ width: '77px', height: '20px' }} src={Article} alt="" />
                            <div style={{ marginTop: '10px', marginBottom: '4px' }} className='d-flex justify-content-between'>
                                <h3>What if famous brands had regular fonts? Meet <br /> RegulaBrands!</h3>
                                <div className="btn-group">
                                    <button type="button" className="fs-5 menu-button bi bi-three-dots dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="">Report</Link></li>
                                        <li><Link className="dropdown-item" to="">Option 3</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '32px' }}>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '48px', height: '48px' }} src={User4} alt="" />
                                    <h6 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '23px', marginLeft: '10px' }}>Sarthak Kamra</h6>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <i style={{ marginRight: '13px' }} className="bi bi-eye"></i>
                                        <small>1.4k views</small>
                                        <button className='share-button'><i className="bi bi-share-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='post1'>
                        <img src={PostBanner2} alt="" />
                        <div className='post1-title'>
                            <img style={{ width: '105px', height: '20px' }} src={Education} alt="" />
                            <div style={{ marginTop: '10px', marginBottom: '4px' }} className='d-flex justify-content-between'>
                                <h3>Tax Benefits for Investment under National Pension <br /> Scheme launched by Government</h3>
                                <div className="btn-group">
                                    <button type="button" className="fs-5 menu-button bi bi-three-dots dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="">Report</Link></li>
                                        <li><Link className="dropdown-item" to="">Option 3</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <p>I've worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '32px' }}>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '48px', height: '48px' }} src={User3} alt="" />
                                    <h6 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '23px', marginLeft: '10px' }}>Sarah West</h6>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <i style={{ marginRight: '13px' }} className="bi bi-eye"></i>
                                        <small>1.4k views</small>
                                        <button className='share-button'><i className="bi bi-share-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '493px' }} className='post1'>
                        <img src={PostBanner3} alt="" />
                        <div className='post1-title'>
                            <img style={{ width: '85px', height: '20px' }} src={Meetup} alt="" />
                            <div style={{ marginTop: '10px', marginBottom: '4px' }} className='d-flex justify-content-between'>
                                <h3>Finance & Investment Elite Social Mixer @Lujiazui</h3>
                                <div className="btn-group">
                                    <button type="button" className="fs-5 menu-button bi bi-three-dots dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="">Report</Link></li>
                                        <li><Link className="dropdown-item" to="">Option 3</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ marginRight: '47px', fontWeight: '500', fontSize: '15px', lineHeight: '19px' }}>
                                    <i className="bi bi-calendar-event text-dark"></i> Fri,12 Oct, 2018
                                </span>
                                <span style={{ fontWeight: '500', fontSize: '15px', lineHeight: '19px' }}>
                                    <i className="bi bi-geo-alt"></i> Ahmedabad, India
                                </span>
                            </div>
                            <button className='visit-button'>Visit Website</button>
                            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '30px' }}>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '48px', height: '48px' }} src={User2} alt="" />
                                    <h6 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '23px', marginLeft: '10px' }}>Ronal Jones</h6>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <i style={{ marginRight: '13px' }} className="bi bi-eye"></i>
                                        <small>1.4k views</small>
                                        <button className='share-button'><i className="bi bi-share-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '275px', marginBottom: '98px' }} className='post1'>
                        <div className='post1-title'>
                            <img style={{ width: '53px', height: '20px' }} src={Job} alt="" />
                            <div style={{ marginTop: '10px', marginBottom: '4px' }} className='d-flex justify-content-between'>
                                <h3>Software Developer</h3>
                                <div className="btn-group">
                                    <button type="button" className="fs-5 menu-button bi bi-three-dots dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item" to="">Edit</Link></li>
                                        <li><Link className="dropdown-item" to="">Report</Link></li>
                                        <li><Link className="dropdown-item" to="">Option 3</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <span style={{ marginRight: '47px', fontWeight: '500', fontSize: '15px', lineHeight: '19px' }}>
                                    <i className="bi bi-briefcase"></i> Innovaccer Analytics Private Ltd.
                                </span>
                                <span style={{ fontWeight: '500', fontSize: '15px', lineHeight: '19px' }}>
                                    <i className="bi bi-geo-alt"></i> Noida, India
                                </span>
                            </div>
                            <button className='apply-button'>Apply on Timesjobs</button>
                            <div className='d-flex align-items-center justify-content-between' style={{ marginTop: '32px' }}>
                                <div className='d-flex align-items-center'>
                                    <img style={{ width: '48px', height: '48px' }} src={User1} alt="" />
                                    <h6 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '23px', marginLeft: '10px' }}>Sarthak Kamra</h6>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center'>
                                        <i style={{ marginRight: '13px' }} className="bi bi-eye"></i>
                                        <small>1.4k views</small>
                                        <button className='share-button'><i className="bi bi-share-fill"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;