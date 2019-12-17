const { EthHdWallet } = require('eth-hd-wallet')

// The address of https://superrare.co/adventcalendar
const adventAddress = '0x7f0ae94cacff9244c56a778f466be475f16703d5'
const combinationsToTest = [
  'usage answer trouble appear mammal hollow skin clap used access basket snack',
  'usage trouble answer appear mammal hollow skin clap used access basket snack',
  'usage trouble appear answer mammal hollow skin clap used access basket snack',
]
// Our testing function
function test(seedPhrase) {
  try {
    const wallet = EthHdWallet.fromMnemonic(seedPhrase)
    wallet.generateAddresses(1)
    if (wallet.hasAddress(adventAddress)) {
      return true
    }
    throw new Error ('Incorrect key phrase')
  } catch (err) {
    return false
  }
}

// Run the test over all the phrases we want to test
let success = false
for (var i=0; i<combinationsToTest.length; i++) {
  const testPhrase = combinationsToTest[i]
  const testResult = test(testPhrase)
  if (testResult) {
    console.log(`You did it!! The seed phrase "${testPhrase}" was the correct one.`) 
    console.log(`Congrats, now put it into metamask and claim your reward before someone else!`)
    success = true
    break;
  }
}

if (!success) {
  console.log(`No luck with the test phrases! Try again with a different combination of the words`)
}
