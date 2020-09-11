import React, { memo } from 'react'

function NotFound() {
    return (
        <div style={{backgroundColor: 'gray',textAlign: 'center', width: '100%', height: '100%'}}>
            404 页面
        </div>
    )
}

export default memo(NotFound);