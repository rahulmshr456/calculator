import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Reset } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    reset: () => dispatch(Reset())
})

function Clear(props) {
    return (
        <MDBBtn color="primary" onClick={props.reset} size={'lg'} >C</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Clear);