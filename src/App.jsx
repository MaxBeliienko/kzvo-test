import { useDispatch } from 'react-redux';
import { fetchCustomers } from './redux/customers/operations';
import Layout from './components/layout/Layout';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);
  return <Layout />;
}

export default App;
