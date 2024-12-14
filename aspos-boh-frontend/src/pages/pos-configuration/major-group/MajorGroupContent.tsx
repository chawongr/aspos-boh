import { StoreClients, StoreClientsFilter } from './blocks/store-clients';

const MajorGroupContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5 mb-7">
      <StoreClientsFilter/>
      <StoreClients />
    </div>
  );
};

export { MajorGroupContent };
