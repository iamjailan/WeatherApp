const APIRequest = async (method: string, path = '', payload = {}) => {
  const url = process.env.CURRENT + path;

  const requestMethod = method.toUpperCase();
  console.log(url);

  const options: any = {
    method,
    json: true,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const NO_BODY_METHODS = ['GET', 'DELETE'];

  if (!NO_BODY_METHODS.includes(requestMethod)) {
    options.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (err) {
    return err;
  }
};

export default APIRequest;
