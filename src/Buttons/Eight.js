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

function Eight(props) {
    return (
        <MDBBtn color="primary" onClick={() => { props.append('8') }} size={'lg'} >8</MDBBtn>
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(Eight);