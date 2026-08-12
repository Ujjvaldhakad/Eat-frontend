// home page section 2 Data

const url = "https://dummyjson.com/recipes";
const res = await fetch(url);
const Data = await res.json();
export default Data;