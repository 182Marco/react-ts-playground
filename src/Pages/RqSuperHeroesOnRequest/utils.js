export const onSuccess = data =>
  console.log(
    `Run this side effect if the query is successfull, those are the data --->`,
    data
  );

export const onError = er =>
  console.log(
    `Run this side effect if the query is not successfull, here's the error`,
    er
  );
