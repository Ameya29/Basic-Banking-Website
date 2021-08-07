function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = enterName + "BankBalance";

        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!  
      Rs. ${enterAmount} is sent to ${enterName}@email.com.`)

        // transaction history 
        var createLiTag = document.createElement("li");
//         var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
//    to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
        var createPTag = document.createElement("p")
        var spanAmount = document.createElement('span')
        // var textNode = document.createTextNode(`Rs ${enterAmount}`)
        spanAmount.appendChild(document.createTextNode(`Rs ${enterAmount}`))
        createPTag.appendChild(spanAmount);
        createPTag.appendChild(document.createElement('br'))
        var spanSender = document.createElement('span')
        spanSender.appendChild(document.createTextNode(`Sender: ${enterSName}`))
        createPTag.appendChild(spanSender);
        createPTag.appendChild(document.createElement('br'))
        var spanReceiver = document.createElement('span')
        spanReceiver.appendChild(document.createTextNode(`Receiver: ${enterName}`))
        createPTag.appendChild(spanReceiver);
        createPTag.appendChild(document.createElement('br'))
        var spanDate = document.createElement('span')
        spanDate.appendChild(document.createTextNode(`Date: ${Date().slice(0,21)}`))
        createPTag.appendChild(spanDate);
        createPTag.appendChild(document.createElement('br'))
        createLiTag.appendChild(createPTag);
        // createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createLiTag, element.firstChild);
    }
}
