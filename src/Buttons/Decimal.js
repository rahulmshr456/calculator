import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Dec } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    append: (val) => dispatch(Dec(val))
});

function Decimal(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('.') }} size={'lg'} >.</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Decimal);