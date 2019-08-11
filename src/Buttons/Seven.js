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
function Seven(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('7') }} size={'lg'} >7</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Seven);