module.exports = {
  // Formats the default wordpress type of date to 'January 1st, 2021'
  getFormattedDate: dateString => {
    let date = new Date(dateString.substring(0, 10))
    let year = date.getFullYear()
    let month = date.toLocaleString("default", { month: "long" })
    let day = date.getDate()
    return month + " " + day + ", " + year
  },
  // Specifically used for getting 'name' from category fields
  getNamesFromNodes: nodes => {
    let array = []
    nodes.forEach(node => {
      array.push(node.name)
    })
    return array
  },
}
