import React from 'react';
import { connect } from "react-redux";
import './App.css';
import { Del } from './Actions/Actions'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Zero, Decimal, Divide, Multiply, Add, Subtract, Equal, Clear, Delete } from './Buttons/index';
const mapStateToProps = state => ({
  ...state, expression: state.expression
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch('clear'),
  equal: () => dispatch('equal'),
  delete: (val) => dispatch(Del(val))
});
function App(props) {
  console.log('sadasdsi', props)
  return (
    <div className="App">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol xl="3" size="12" className={'mx-auto mt-5'}>
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="12" size="12" className={'mb-2'}>

                    <div className="d-flex overflow-hidden align-items-end bd-highlight justify-content-end border rounded mt-2  text-right pr-2 pb-2" style={{ height: '100px' }}>
                      <span className='h3 wordWrap'>{props.expression}</span>
                    </div>

                  </MDBCol>
                  <MDBCol sm="12" size="12" className={''}>
                    <div className={'w-100 py-5 border rounded mt-2'}>
                      <MDBRow>
                        <MDBCol md='12' className="mb-1">

                          <Clear />
                          <Delete />
                          <Divide />
                          <Multiply />

                        </MDBCol>
                        <MDBCol md='12' className="mb-1">

                          <Seven />
                          <Eight />
                          <Nine />
                          <Subtract />

                        </MDBCol>
                        <MDBCol md='12' className="mb-1">

                          <Four />
                          <Five />
                          <Six />
                          <Add />

                        </MDBCol>
                        <MDBCol md='12' className="mb-1">

                          <One />
                          <Two />
                          <Three />
                          <Decimal />

                        </MDBCol>
                        <MDBCol md='12' className="mb-1">

                          <Zero />
                          <Equal />

                        </MDBCol>
                      </MDBRow>
                    </div>
                  </MDBCol>
                </MDBRow>
                {/* <MDBBtn href="#">MDBBtn</MDBBtn> */}
              </MDBCardBody>
            </MDBCard >
          </MDBCol >

        </MDBRow >
      </MDBContainer >
    </div >
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
