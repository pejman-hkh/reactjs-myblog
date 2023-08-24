import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import { Link } from "./Features.jsx";

let authMenu = '';
export function Header() {

    if(authUser.id) {
      authMenu =
        <ul className="pull-left">
           <li className="dropdown"> <Link to="/">{authUser.name} Welcome</Link>
            <ul className="dropdown-menu">
                <li className="nav-elipse-blue"><a href={baseUrl+"manager"}>Manager</a></li>
                <li className="nav-elipse-blue"><a href={baseUrl+"user/logout"}>Logout</a></li>

            </ul>
           </li> 
        </ul>;
    }

    return (<>
    <header className="navbar-fixed-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-top">
                        <div className="header-top-logo">
                            <a href={baseUrl}>PEJI.IR</a>
                        </div>
                    
                        <nav className="header-top-nav">
                            <ul>
                                <li className="header-top-nav-search">
                                    <a href="#" className="light-link" title="Search"><i className="pe-7s-search"></i></a>
                                    <form action="#" method="get">
                                        <input type="text" className="form-control" placeholder="جستجو..." />
                                        <button type="submit"><i className="pe-7s-search"></i></button>
                                    </form>
                                </li>
                                <li><a href="#" className="light-link" title="Menu">
                                    <div id="menu-animate-icon" className="header-top-nav-menu-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="col-lg-12">
                    <nav className="header-nav">
                        <ul className="pull-right">
                          {menus.map( ( menu ) =>
                            <li className="" key={menu.id}><Link to={menu.murl} title={menu.title}>{menu.title}</Link></li>
                          )}
       
                        </ul>
                        {authMenu}
                    </nav>
                </div>
            </div>

        </div>
    </header>

    <nav className="mobile-nav header-nav">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
            
                </div>
            </div>
        </div>
    </nav>

    </>);

}

export function Main({ children, ...props }) {
	return (<main>
		{children}
	</main>);
}

export function Footer() {
	return (
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-xs-12">
                <div className="footer-section">
                    <h3 className="footer-section-title">آخرین پست ها</h3>
                    <ul className="footer-section-content">

                        {lastPosts.map( post => 
                        <li className="" key={post.id}>
                            <h4><Link to={post.link} title={post.title}>{post.title}</Link></h4>
                            <p className="font-primary">{post.short}
                            </p>
                        </li>
                        )}
                        
                    </ul>
                </div>
            </div>


            <div className="col-md-4 col-xs-12">
                <div className="footer-section border-bottom">
                    <img src={baseUrl+"img/logo-grey.png"} alt="" className="footer-section-title-img" data-rjs="2" />
                    <div className="footer-section-content">
                        <p className="font-primary footer-section-content-about">
                            درباره من : <br />
                            {settings.desc}
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <div className="copyright">
                    <ul>
                        <li><a href="" title="Twitter"><i className="icon-social_twitter_circle"></i></a></li>
                        <li><a href="" title="Github"><i className="icon-social_github_circle"></i></a></li>
                        <li><a href="" title="LinkedIn"><i className="icon-social_linkedin_circle"></i></a></li>
                    </ul>
                   
                </div>
            </div>
        </div>
    </div>
</footer>
	);
}


export default function Layout( { children, ...props }) {

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
    );
}

export function Layout1( { children, ...props }) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
    );
}
