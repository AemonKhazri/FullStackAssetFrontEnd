import PageAccessTemplate from '../../components/dashboard/page-access/PageAccessTemplate';
import { BsGlobeAmericas } from 'react-icons/bs';
import Spinner from '../../components/general/Spinner';
import Button from '../../components/general/Button';
import { useNavigate } from 'react-router-dom';
import { PATH_DASHBOARD } from '../../routes/paths';

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <div className='pageTemplate2'>
      <PageAccessTemplate color='#000' icon={BsGlobeAmericas} role='Dashboard'>
        <div className='text-3xl space-y-2'>
          <h1>Dashboard Access can be either:</h1>
          <h1>Admin</h1>
          <h1>Manager</h1>
          <h1>User</h1>
        </div>
        <div className='flex items-center bg-white justify-center rounded-md gap-2'>
            <Button label='update credentials' onClick={() => navigate(PATH_DASHBOARD.updateCredentials)} type='button' variant='light' />
</div>
    
     
      </PageAccessTemplate>
      
    </div>
  );
};

export default DashboardPage;