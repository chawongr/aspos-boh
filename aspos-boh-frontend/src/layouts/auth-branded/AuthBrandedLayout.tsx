import { Link, Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import { toAbsoluteUrl } from '@/utils';
import useBodyClasses from '@/hooks/useBodyClasses';
import { AuthBrandedLayoutProvider } from './AuthBrandedLayoutProvider';

import Background from '/media/app/login-bg.svg'

const Layout = () => {
  // Applying body classes to manage the background color in dark mode
  useBodyClasses('dark:bg-coal-500');

  return (
    <Fragment>


      <div
        className="grid grid-cols-2 grow"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center p-8 lg:p-10 order-2 bg-white rounded-l-3xl">
          <Outlet />
        </div>
        <div className='my-auto ml-[5%]'>
          <div className='text-[3.5rem] font-semibold text-white'>Welcome back!</div>
          <div className='text-[1.175rem] font-extralight text-white mt-4'>Let's make things exciting – log in now!</div>

        </div>      
        </div>
    </Fragment>
  );
};

// AuthBrandedLayout component that wraps the Layout component with AuthBrandedLayoutProvider
const AuthBrandedLayout = () => (
  <AuthBrandedLayoutProvider>
    <Layout />
  </AuthBrandedLayoutProvider>
);

export { AuthBrandedLayout };
