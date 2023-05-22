interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface ExpenceListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

function ExpenseList({ expenses, onDelete }: ExpenceListProps) {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <th>{expense.description}</th>
            <th>{expense.amount}</th>
            <th>{expense.category}</th>
            <th>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
}

export default ExpenseList;
