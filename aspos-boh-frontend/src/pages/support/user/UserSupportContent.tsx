import { StoreClients, StoreClientsFilter } from './blocks/store-clients';

const UserSupportContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <StoreClientsFilter/>
      <StoreClients />
    </div>
  );
};

export { UserSupportContent };
