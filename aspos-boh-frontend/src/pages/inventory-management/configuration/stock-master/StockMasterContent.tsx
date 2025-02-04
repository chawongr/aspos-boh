import {  StoreClientsFilter,StoreClients } from './blocks';

const StockMasterContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5 mb-7">
      <StoreClientsFilter/>
      <StoreClients/>
    </div>
  );
};

export { StockMasterContent };
