

const logRequestParams = (req, res, next) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.originalUrl);
    console.log('Request Params:', req.params);
    console.log('Request Query:', req.query);
    console.log('Request Body:', req.body);
    next();
  };
  
  module.exports = logRequestParams;
  