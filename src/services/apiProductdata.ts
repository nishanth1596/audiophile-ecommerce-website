// https://67ecd13789990cabc023849b--elegant-moxie-e8615c.netlify.app/data.json

export async function fetchProductData() {
  try {
    const res = await fetch(
      `https://67ecd13789990cabc023849b--elegant-moxie-e8615c.netlify.app/data.json`,
    );

    if (!res.ok) throw new Error(`HTTP error, error: ${res.status}`);

    const data = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Unable to fetch data: ${error.message}`);
    } else {
      console.error("An unknown error occurred", error);
    }
    return [];
  }
}
