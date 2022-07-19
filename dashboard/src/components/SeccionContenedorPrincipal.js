import React from 'react';
import TopBar from './TopBar';
import SeccionContenidoDeContendios from './SeccionContenidoDeContedores';
import UsersInDb from './UsersInDb';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <SeccionContenidoDeContendios />
                    <UsersInDb/>
                    <Footer />
                </div>
            </div>    
        </>
    )
}
export default ContentWrapper;