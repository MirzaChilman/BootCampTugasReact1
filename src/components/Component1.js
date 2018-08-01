import React from 'react';

const component1 = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.data11}</h1>
      <h1>{props.data12}</h1>
      <h1>{props.data13}</h1>
    </div>
  );
};

export default component1;
