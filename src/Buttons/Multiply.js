import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Operator } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    append: (val) => dispatch(Operator(val))
});

function Multiply(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('*') }} size={'lg'} >*</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Multiply);