import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Equ } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    equal: (val) => dispatch(Equ(val))
});

function Equal(props) {
    return (
        <MDBBtn color="primary" onClick={props.equal} size={'lg'} >=</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Equal);