import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import {
  AccountBackupAndRecoveryPage,
  AccountInviteAFriendPage,
  AccountSecurityLogPage,
  AccountSettingsPlainPage,
  AccountUserProfilePage
} from '@/pages/account';
import {
  NetworkAppRosterPage,
  NetworkMarketAuthorsPage,
  NetworkSaasUsersPage,
  NetworkStoreClientsPage,
  NetworkUserTableTeamCrewPage,
  NetworkVisitorsPage
} from '@/pages/network';

import { 
  SalesEnquiryPage, 
  CashierEnquiryPage, 
  MajorEnquiryPage 
} from '@/pages/dashboards'

import { 
  FamilyGroupPage, 
  MenuItemPage, 
  MajorGroupPage, 
  KitchenPrinterPage,
  PCTablePage,
  PrinterPage,
  ComboGroupPage,
  SystemMainPage,
  SystemOptionPage,
  SystemUrlPage
} from '@/pages/pos-configuration'

import{
  GoodReceiptPage,
  ItemTypePage,
  ItemsPage,
  StockCountPage,
  SupplierPage

  
}from '@/pages/inventory-management'

import { SystemSettingPage } from '@/pages/system-setting'

import { AuthPage } from '@/auth';
import { RequireAuth } from '@/auth/RequireAuth';
import { Demo1Layout } from '@/layouts/demo1';
import { ErrorsRouting } from '@/errors';

const AppRoutingSetup = (): ReactElement => {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route element={<Demo1Layout />}>
          <Route path="/" element={<SalesEnquiryPage />} />
          <Route path="/dashboard/cashier-enquiry" element={<CashierEnquiryPage />} />
          <Route path="/dashboard/major-enquiry" element={<MajorEnquiryPage />} />

          <Route path="/pos-config/family-group" element={<FamilyGroupPage />} />
          <Route path="/pos-config/menu-item" element={<MenuItemPage />} />
          <Route path="/pos-config/menu-item/combo-group" element={<ComboGroupPage />} />

          <Route path="/pos-config/major-group" element={<MajorGroupPage />} />
          
          <Route path="/pos-config/device/pc-table" element={<PCTablePage />} />
          <Route path="/pos-config/device/printer" element={<PrinterPage />} />
          <Route path="/pos-config/device/kitchen-printer" element={<KitchenPrinterPage />} />
          
          <Route path="/pos-config/system/system/main" element={<SystemMainPage />} />
          <Route path="/pos-config/system/system/option" element={<SystemOptionPage />} />
          <Route path="/pos-config/system/system/url" element={<SystemUrlPage />} />

          <Route path="/system-setting" element={<SystemSettingPage />} />
          {/* <Route path="/system-setting" element={<AccountUserProfilePage />} /> */}

          <Route path="/inventory-manage/goods-receipt" element={<GoodReceiptPage />} />
          <Route path="/inventory-manage/item-type" element={<ItemTypePage />} />
          <Route path="/inventory-manage/items" element={<ItemsPage />} />
          <Route path="/inventory-manage/stock-count" element={<StockCountPage />} />
          <Route path="/inventory-manage/supplier" element={<SupplierPage />} />

          <Route path="/account/home/user-profile" element={<AccountUserProfilePage />} />
          <Route path="/account/home/settings-plain" element={<AccountSettingsPlainPage />} />
          <Route
            path="/account/security/backup-and-recovery"
            element={<AccountBackupAndRecoveryPage />}
          />
          <Route path="/account/security/security-log" element={<AccountSecurityLogPage />} />

          <Route path="/account/invite-a-friend" element={<AccountInviteAFriendPage />} />
          <Route path="/network/user-table/team-crew" element={<NetworkUserTableTeamCrewPage />} />
          <Route path="/network/user-table/app-roster" element={<NetworkAppRosterPage />} />
          <Route path="/network/user-table/market-authors" element={<NetworkMarketAuthorsPage />} />
          <Route path="/network/user-table/saas-users" element={<NetworkSaasUsersPage />} />
          <Route path="/network/user-table/store-clients" element={<NetworkStoreClientsPage />} />
          <Route path="/network/user-table/visitors" element={<NetworkVisitorsPage />} />
      
        </Route>
      </Route>
      <Route path="error/*" element={<ErrorsRouting />} />
      <Route path="auth/*" element={<AuthPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};

export { AppRoutingSetup };
