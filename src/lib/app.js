
const copyName = 'HXX'
const copyRight = 'hxx 2020 - ' + getYear()
const copyContact = '15175970797'

function getYear () {
  var date = new Date()
  var year = date.getFullYear()
  return year.toString()
}

module.exports = {
  appName: 'HXX Vue Demo',
  appNameEn: 'hvd',
  appId: '0',
  appVersion: '1.0',
  copyName,
  copyRight,
  copyContact
}
