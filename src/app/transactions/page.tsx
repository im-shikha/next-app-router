type Transaction = {
  id: number;
  date: string;
  description: string;
  income: number;
  expense: number;
  balance: number;
};

const transactions: Transaction[] = [
  {
    id: 1,
    date: "2026-06-01",
    description: "Salary",
    income: 50000,
    expense: 0,
    balance: 50000,
  },
  {
    id: 2,
    date: "2026-06-03",
    description: "Groceries",
    income: 0,
    expense: 2500,
    balance: 47500,
  },
  {
    id: 3,
    date: "2026-06-07",
    description: "Freelance Project",
    income: 12000,
    expense: 0,
    balance: 59500,
  },
  {
    id: 4,
    date: "2026-06-10",
    description: "Electricity Bill",
    income: 0,
    expense: 1800,
    balance: 57700,
  },
  {
    id: 5,
    date: "2026-06-12",
    description: "Restaurant",
    income: 0,
    expense: 1200,
    balance: 56500,
  },
];

export default function Transactions() {
  return (
    <div className="rounded-lg bg-white p-6 shadow justify-center mt-16">
      <h2 className="mb-4 text-xl font-semibold text-black">Transactions</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-black">
              <th className="py-3">Date</th>
              <th className="py-3">Description</th>
              <th className="py-3">Income</th>
              <th className="py-3">Expense</th>
              <th className="py-3">Balance</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="py-4 text-gray-900">{transaction.date}</td>

                <td className="py-4 text-gray-900">
                  {transaction.description}
                </td>

                <td className="py-4 text-green-600">
                  {transaction.income > 0
                    ? `₹${transaction.income.toLocaleString()}`
                    : "-"}
                </td>

                <td className="py-4 text-red-600">
                  {transaction.expense > 0
                    ? `₹${transaction.expense.toLocaleString()}`
                    : "-"}
                </td>

                <td className="py-4 font-medium text-gray-900">
                  ₹{transaction.balance.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
