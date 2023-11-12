
import React from 'react';
import {
    MDBFooter,
    MDBContainer,

      } from 'mdb-react-ui-kit';


const Footer= () => {
    return(
        <MDBFooter className='bg-primary text-center text-white mt-4'>
        <MDBContainer className='p-3'>
          <section>
          Copyright © PizzeriaApp 2023

          </section>
        </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;