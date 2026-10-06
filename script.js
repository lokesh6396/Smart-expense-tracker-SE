let transactions = [];
let monthlyBudget = 0;

function addTransaction() {

    const description =
        document.getElementById("description").value.trim();

    const amount =
        Number(document.getElementById("amount").value);

    const type =
        document.getElementById("type").value;

    if (!description || amount <= 0) {

        alert(
            "Please enter a description and a valid amount greater than zero."
        );

        return;
    }

    transactions.push({
        description: description,
        amount: amount,
        type: type
    });

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    updateDashboard();
}

function setBudget() {

    const budget =
        Number(document.getElementById("budget").value);

    if (budget <= 0) {

        alert("Please enter a valid monthly budget.");

        return;
    }

    monthlyBudget = budget;

    document.getElementById("budgetDisplay").textContent =
        `Monthly Budget: ₹${monthlyBudget}`;

    document.getElementById("budget").value = "";
}

function updateDashboard() {

    let income = 0;
    let expense = 0;

    const transactionList =
        document.getElementById("transactions");

    transactionList.innerHTML = "";

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

        const item =
            document.createElement("li");

        item.textContent =
            `${transaction.description} - ₹${transaction.amount} (${transaction.type})`;

        transactionList.appendChild(item);
    });

    const balance = income - expense;

    document.getElementById("income").textContent =
        `₹${income}`;

    document.getElementById("expense").textContent =
        `₹${expense}`;

    document.getElementById("balance").textContent =
        `₹${balance}`;
}