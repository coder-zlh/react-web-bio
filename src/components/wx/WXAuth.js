import React, { useEffect } from 'react';

import { getWXAuthCodeUrl } from 'config/wxAuth'

export default function WXAuth() {

    useEffect(() => {
        console.log("arrived")
        window.location = getWXAuthCodeUrl;
    }, []);

    return null;
}
