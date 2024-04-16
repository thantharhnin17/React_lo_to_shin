import React from 'react';

const styles = {
    toolbar: {
        padding: 10,
        marginBottom: 20,
        border: '1px solid red' 
    },
    dark: {
        background: 'black',
        color: 'white'
    }
}
class Toolbar extends React.Component{    

    render() {
        return (
            //json format inline css
            <div style={{ ...styles.toolbar, ...styles.dark }}>
                {this.props.children}
            </div>
        )
    }
}

export default Toolbar;