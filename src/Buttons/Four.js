import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Append } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    append: (val) => dispatch(Append(val))
});

function Four(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('4') }} size={'lg'} >4</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Four);