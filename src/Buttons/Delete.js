import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from 'react-redux';
import { Del } from '../Actions/Actions'
const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    delete: (val) => dispatch(Del(val))
});
function Delete(props) {
    return (
        <MDBBtn color="primary" className={'font-weight-bolder'} onClick={() => { props.delete('val') }} size={'lg'} >D</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Delete);

