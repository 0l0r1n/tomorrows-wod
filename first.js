import parse from './src/parse'

export const hello = async (event, context, callback) => {
  console.log(await parse())
  const p = new Promise((resolve) => {
    resolve('success');
  });
  p
    .then(() => callback(null, {
      message: 'Go Serverless Webpack (Ecma Script) v1.0! First module!',
      event,
    }))
    .catch(e => callback(e));
};
