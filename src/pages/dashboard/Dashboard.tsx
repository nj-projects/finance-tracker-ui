const Dashboard = () => {
    const expenses = [
        {
            id: 1,
            name: 'Water Bill',
            amount: 200.00,
            date: new Date().toDateString()
        },
        {
            id: 2,
            name: 'Guitar',
            amount: 900.00,
            date: new Date().toDateString()
        }
    ]
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
                    <tr key={expense.id}>
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

export default Dashboard;   