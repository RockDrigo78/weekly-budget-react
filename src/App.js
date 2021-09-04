import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Formular from "./components/Formular";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
    const [budget, addBudget] = useState(0);
    const [budgetLeft, addBudgetLeft] = useState(0);
    const [showQuestion, updateShowQuestion] = useState(true);
    const [spends, addSpend] = useState([]);
    const [newSpend, addNewSpend] = useState({});
    const [createSpend, addCreateSpend] = useState(false);

    // budget left update
    useEffect(() => {
        if (createSpend) {
            addSpend([...spends, newSpend]);
            addBudgetLeft(budgetLeft - newSpend.ammount);
            addCreateSpend(false);
        }
    }, [newSpend, budgetLeft, createSpend, spends]);

    return (
        <div className="container">
            <header>
                <h1>Weekly Budget</h1>
                <div className="contenido-principal contenido">
                    {showQuestion ? (
                        <Question
                            budget={budget}
                            budgetLeft={budgetLeft}
                            addBudget={addBudget}
                            addBudgetLeft={addBudgetLeft}
                            updateShowQuestion={updateShowQuestion}
                        />
                    ) : (
                        <div className="row">
                            <div className="one-half column">
                                <Formular
                                    addNewSpend={addNewSpend}
                                    addCreateSpend={addCreateSpend}
                                />
                            </div>
                            <div className="one-half column">
                                <List spends={spends} />
                                <BudgetControl
                                    budget={budget}
                                    budgetLeft={budgetLeft}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
}

export default App;
