/**
 * Manejo de errores
 */

export default app => {
    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
          return res.status(403).send({
            success: false,
            message: 'No token provided.'
          });
        }
    });
}
