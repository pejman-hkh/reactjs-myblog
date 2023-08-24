import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Link({ to, children, ...props }) {
    const navigate = useNavigate();
    function handleClick( e ) {
        e.preventDefault();
        getData(to).then(function(data) {
            window.cacheData[encodeURIComponent(to)] = data;
            for( let x in data ) {
                window[x] = data[x];
            }

            navigate(to);

        });
    }

    return <a href={to} {...props} onClick={(e) => handleClick(e, to)}>{children}</a>;
}

export function Pagination({ ...props }) {
    let pagination = props.pages;
	let params1 = paramsString;
    const mcontroller = 'index';
	let pages = [];
	for( let i = pagination.start; i < pagination.end; i++ ) {
		pages.push( i );
	}

	return <nav aria-label="..."> 
        <Link title="" to={baseUrl+mcontroller+"/"+(params1?params1+'/':'')+"page/"+pagination.prev+queryString} className="btn-small-white pagination-back">قبلی</Link>
        <ul className="pagination">
            
            {pages.map( i =>
            <li key={i} className={"page-item "+(props.params.page == i ? ' active' : '')}>
                <Link className="page-link" to={baseUrl+mcontroller+"/"+(params1?params1+'/':'')+"page/"+i+queryString}>{i}</Link>
            </li>
            )}

            <li className="page-item page-item-more"><a className="page-link" href="#">...</a></li>
      
            <Link title="" to={baseUrl+mcontroller+"/"+(params1?params1+"/":"")+"page/"+pagination.endPage+queryString} className="btn-small-white pagination-back">{pagination.endPage}</Link>
        </ul>
        <Link title="" to={baseUrl+mcontroller+"/"+(params1?params1+"/":"")+"page/"+pagination.next+queryString} className="btn-small-white pagination-next">بعدی</Link>
	</nav>
}

export function RightSide() {

    return <div className="aside-blocks col-lg-4 col-xs-12">
        <aside className="author">
            <img src={baseUrl+"img/profile-picture.png"} alt="" data-rjs="2" />
            <h2>{settings.name}</h2>
            <span className="author-info">{settings.shortdesc}</span>

            <div className="social">
                <a href="" title="Twitter"><i className="icon-social_twitter_circle"></i></a>
                <a href="https://github.com/pejman-hkh/" title="Github"><i className="icon-social_github_circle"></i></a>
                <a href="" title="LinkedIn"><i className="icon-social_linkedin_circle"></i></a>
            </div>
            <ul className="author-nav">
                <li><Link to={baseUrl+"resum"} title=""><i className="pe-7s-bookmarks"></i> رزومه من</Link></li>
                <li><Link to={baseUrl+"contact"} title=""><i className="pe-7s-paper-plane"></i> تماس با من</Link></li>
            </ul>
        </aside>

        <aside className="categories">
            <h2 className="aside-title">دسته بندی</h2>
            <ul>
                {cats.map( cat => 
                <li key={cat.id} className="nav-elipse-blue"><Link to={cat.link} title={cat.title}>{cat.title}</Link></li>
                )}
            </ul>
        </aside>
    </div>

}

export function Loading() {

    return     <div className="container">
        <div className="row">
            <div className="col-lg-8 col-xs-12">
                <section className="articles">
                <article className="blue-article"><div className="articles-content"><p>بارگزاری ...</p></div></article>
                </section>
            </div>
     
        </div>
    </div>

}