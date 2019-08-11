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

function Five(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('5') }} size={'lg'} >5</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Five);