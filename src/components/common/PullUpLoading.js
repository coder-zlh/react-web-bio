import 'styles/common/loading.scss';

import React from 'react';

function PullUpLoading()  {
  return (
    <div className='pullup-loading'>
      <div></div>
      <div></div>
    </div>
  );
}
 
export default React.memo(PullUpLoading);