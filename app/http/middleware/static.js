/**
 * Static folders middleware
 */

import express from 'express';
import methodOverride from 'method-override';

export default app => {
    app.use(methodOverride())
    app.use(express.static(__dirname + '/../../../public'));
}