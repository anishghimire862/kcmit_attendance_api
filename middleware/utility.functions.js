module.exports = {
  getUniqueStudentsCount: function(list) {
    distinctStudentName = [...new Set(list.map(x => x.name))];
    return distinctStudentName.length
  },
  
  getUniqueDateCount: function(list) {
    distinctDate = [...new Set(list.map(x => x.start))];
    return distinctDate.length
  },
  getUniqueDate: function(list) {
    return [...new Set(list.map(x => x.start))] 
  }
}