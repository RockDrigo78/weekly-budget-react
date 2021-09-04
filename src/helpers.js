export const checkBudget = (budget, budgetLeft) => {
    let className;

    if (budget / 4 > budgetLeft) {
        className = "alert alert-danger";
    } else if (budget / 2 > budgetLeft) {
        className = "alert alert-warning";
    } else {
        className = "alert alert-success";
    }

    return className;
};
