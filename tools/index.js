export const responseToJson = async (res) => {
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    return [];
  }

};