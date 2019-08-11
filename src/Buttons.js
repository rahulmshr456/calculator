import React from 'react';
import { MDBBtn } from "mdbreact";
import { connect } from "react-redux";
function One() {
    return (
        <MDBBtn color="primary" size={'lg'} >1</MDBBtn>
    );
}

function Two() {
    return (
        <MDBBtn color="primary" size={'lg'} >2</MDBBtn>
    );
}

function Three() {
    return (
        <MDBBtn color="primary" size={'lg'} >3</MDBBtn>
    );
}

function Four() {
    return (
        <MDBBtn color="primary" size={'lg'} >4</MDBBtn>
    );
}

function Five() {
    return (
        <MDBBtn color="primary" size={'lg'} >5</MDBBtn>
    );
}

function Six() {
    return (
        <MDBBtn color="primary" size={'lg'} >6</MDBBtn>
    );
}

function Seven() {
    return (
        <MDBBtn color="primary" size={'lg'} >7</MDBBtn>
    );
}

function Eight() {
    return (
        <MDBBtn color="primary" size={'lg'} >8</MDBBtn>
    );
}

function Nine() {
    return (
        <MDBBtn color="primary" size={'lg'} >9</MDBBtn>
    );
}

function Zero() {
    return (
        <MDBBtn color="primary" size={'lg'} >0</MDBBtn>
    );
}

function Decimal() {
    return (
        <MDBBtn color="primary" size={'lg'} >.</MDBBtn>
    );
}

function Divide() {
    return (
        <MDBBtn color="primary" size={'lg'} >/</MDBBtn>
    );
}

function Multiply() {
    return (
        <MDBBtn color="primary" size={'lg'} >*</MDBBtn>
    );
}

function Add() {
    return (
        <MDBBtn color="primary" size={'lg'} >+</MDBBtn>
    );
}

function Subtract() {
    return (
        <MDBBtn color="primary" size={'lg'} >-</MDBBtn>
    );
}

function Equal() {
    return (
        <MDBBtn color="primary" size={'lg'} >=</MDBBtn>
    );
}

function Clear() {
    return (
        <MDBBtn color="primary" size={'lg'} >C</MDBBtn>
    );
}

function Delete() {
    return (
        <MDBBtn color="primary" size={'lg'} >D</MDBBtn>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Zero, Decimal, Divide, Multiply, Add, Subtract, Equal, Clear, Delete)