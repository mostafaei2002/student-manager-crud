export function flattenResponse(rawData) {
  const newData = rawData.map((row) => ({ id: row.id, ...row.attributes }));

  return newData;
}
