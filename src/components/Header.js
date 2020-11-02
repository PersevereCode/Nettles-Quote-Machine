import React from 'react';

class Header extends React.Component {

    render() {

        return (
            <div className = "pos-f-t">

                <nav className = "navbar navbar-dark bg-info">
                    
                    <button className = "navbar-toggler" 
                
                    type= "button"

                    data-toggle = "collapse"

                    data-target = "#navbarToggleExternalContent"

                    aria-controls = "navbarToggleExternalContent" 

                    aria-expanded = "true"

                    aria-label="Toggle navigation">

                    <span className = "navbar-toggler-icon">
                    </span>
                
                </button>

                    <h1 className = 'title'>
                        Quotes?
                    </h1>
                </nav>
            </div>
        )
    }

}


export default Header;