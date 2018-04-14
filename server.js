const mongoose = require('mongoose');
const express = require('express'); 
const helmet = require('helmet');


const budgetRouter = require('./budgets/BudgetRouter')
const categoryRouter = require('./categories/CategoryRouter')
const expenseRouter = require('./expenses/ExpenseRouter')

const server = express();

mongoose.connect('mongodb://localhost/budgettracker')
  .then(() => console.log('\n... API Connected to Database ...\n'))
  .catch(err => console.log('\n*** ERROR Connecting to Database ***\n', err));


server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'running' });
});

server.use('/budgets', budgetRouter);
server.use('/categories', categoryRouter);
server.use('/expenses', expenseRouter);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server up and running on ${port}`);
});
