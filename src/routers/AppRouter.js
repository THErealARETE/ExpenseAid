import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
//import Topics from '../Components/topic';
//import Contact from '../Components/contact';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <Router>
    <div>
      <Header/>
      <hr />
      
      <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/edit/:id" component={EditExpensePage} /> 
      <Route path="/create" component={AddExpensePage} />
      <Route component={NotFoundPage} />
      </Switch>
      </div>
  </Router>

      );
      

export default AppRouter;     