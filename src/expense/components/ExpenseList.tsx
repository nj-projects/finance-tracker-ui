import {Expense} from "../model/Expense.ts";

interface Props {
    expenses: Expense[];
}

const ExpenseList = ({expenses}: Props) => {

    return (
        <div>
            <table border={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {expenses.map(expense =>
                    <tr key={expense.publicId}>
                        <td>{expense.name}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.date}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;