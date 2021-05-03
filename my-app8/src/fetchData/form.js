// exclude column list from filter
const excludeColumns = ["id", "color"];
 
// filter records by search text
const filterData = (value) => {
  const lowercasedValue = value.toLowerCase().trim();
  if (lowercasedValue === "") setData(dataList);
  else {
    const filteredData = dataList.filter(item => {
      return Object.keys(item).some(key =>
        excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
      );
    });
    setData(filteredData);
  }
}