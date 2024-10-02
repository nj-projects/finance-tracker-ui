import ExpenseList from "../../expense/components/ExpenseList.tsx";
import {Expense} from "../../expense/model/Expense.ts";
import {useEffect, useState} from "react";
import apiClient from "../../config/api-client.ts";

const Dashboard = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [errors, setErrors] = useState(null);
    const [isLoading, setLoader] = useState(false);
    useEffect(() => {
        apiClient
            .get('/expenses')
            .then(res => setExpenses(res.data))
            .catch(err => setErrors(err))
            .finally(() => setLoader(false))
    }, []);

    return (
        <>
            <ExpenseList expenses={expenses}/>
        </>

    );
};

export default Dashboard;   