module.exports = function createDreamTeam(members) { 
  if(!Array.isArray(members)) {
    return false;
}
  var result = [];
  for (item of members){
    typeof item == 'string' ? result.push(item.trim().toUpperCase()[0]) : false;
  }
  return result.sort().join('');
};
