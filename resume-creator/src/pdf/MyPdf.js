import React from 'react';
import Button from '@material-ui/core/Button';

import SinglePage from "./SinglePage";
import PrintButton from "./PrintButton";

const MyPdf = (props) => (
<div className="bg-black-80 w-100 pv5">

  <div className="white mt3 tc f3">Those are your Resume.</div>
  <Button variant="contained" color="primary">
    <PrintButton id={"singlePage"} label={"Print Resume"} />
  </Button>
  <SinglePage id={"singlePage"} {...props}/>

</div>
);

export default MyPdf;
