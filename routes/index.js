/**
 * Put here all files with routes
 */

import auth  from './auth';
import rooms  from './rooms';
import web  from './web';
import message  from './message';


export default (app) => {
    app.use(web);
    app.use('/auth', auth);
    app.use('/room', rooms);
    app.use('/message', message);
}