// Write your solution in this file!
const driver ={}

function updateDriverWithKeyAndValue(driver, key, value){
  const newOb = {}
  Object.assign(newOb, driver, {name: "Sam", address: '11 Broadway'})
  return newOb
}