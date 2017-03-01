function returnStringGen() {
    // random

  const strSource = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnobqrstuvwxyz1234567890';
  const strReturn = ''; // variable to fill genenerated link
  const strLength = '9';
  for (var i = 0; i < strLength; i++) {
      // making the generator by adding math random and math round
        strReturn += strSource.charAt((Math.random()) * strSource.length);
  }

  return strReturn;
}
exports.returnStringGen = returnStringGen;
