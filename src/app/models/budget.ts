import { BudgetItem } from "./budget-item";

export class Budget {
    id: number = 0;
    user_id: number = 0;
    items: BudgetItem[] = [];
    total_amount: number = 0.00;
}
