import 'styles/common/loading.scss';

import React from 'react';

function PullDownLoading() {
  return (
    <div className="pull-down-loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>拼命加载中...</span>
    </div>
  );
}
 
export default React.memo(PullDownLoading);