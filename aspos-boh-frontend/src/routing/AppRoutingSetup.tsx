import { ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import {
  AccountBackupAndRecoveryPage,
  AccountInviteAFriendPage,
  AccountSecurityLogPage,
  AccountSettingsPlainPage,
  AccountUserProfilePage
} from '@/pages/account';

import { LogsPage } from '@/pages/logs-page'

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
  MajorEnquiryPage,
  InventoryEnquiryPage
} from '@/pages/dashboards'

import { HelpPage } from '@/pages/help'

import {
  FamilyGroupPage,
  MenuItemPage,
  // MajorGroupPage,
  KitchenPrinterPage,
  PCTablePage,
  PrinterPage,
  ComboGroupPage,
  HqSyncDownPage,
  StoreGroupPage,
  StorePage,
  StoreTypePage,
  AreaPage,
  CompanyPage,
  SystemPage
} from '@/pages/pos-configuration'

import { UserSupportPage } from '@/pages/support'

import { LineOAPage } from '@/pages/line-oa'

import { ComboDefPage } from '@/pages/pos-configuration/menu-item/combo-def'

import { MajorGroupPage } from '@/pages/pos-configuration/sales/menu-item/major-group';

import {
  GoodReceiptPage,
  ItemTypePage,
  ItemsPage,
  StockCountPage,
  SupplierPage


} from '@/pages/inventory-management'

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
          <Route path="/dashboard/inventory-enquiry" element={<InventoryEnquiryPage />} />

          <Route path="/pos-config/family-group" element={<FamilyGroupPage />} />
          <Route path="/pos-config/menu-item" element={<MenuItemPage />} />
          <Route path="/pos-config/menu-item/combo-group" element={<ComboGroupPage />} />
          <Route path="/pos-config/menu-item/combo-def" element={<ComboDefPage />} />


          {/* <Route path="/pos-config/major-group" element={<MajorGroupPage />} /> */}
          <Route path="/pos-config/sales/menu-item/major-group" element={<MajorGroupPage />} />

          <Route path="/logs" element={<LogsPage />} />

          <Route path="/line-oa" element={<LineOAPage />} />

          <Route path="/pos-config/device/pc-table" element={<PCTablePage />} />
          <Route path="/pos-config/device/printer" element={<PrinterPage />} />
          <Route path="/pos-config/device/kitchen-printer" element={<KitchenPrinterPage />} />

          <Route path="/pos-config/system/store/storeGroup" element={<StoreGroupPage />} />
          <Route path="/pos-config/system/store/store" element={<StorePage />} />
          <Route path="/pos-config/system/store/storeType" element={<StoreTypePage />} />
          {/* <Route path="/pos-config/system/store/storeType/add" element={<StoreTypeAdd />} /> */}
          <Route path="/pos-config/system/store/area" element={<AreaPage />} />
          <Route path="/pos-config/system/store/company" element={<CompanyPage />} />
          <Route path="/pos-config/system/store/hqSync" element={<HqSyncDownPage />} />
          <Route path="/pos-config/system" element={<SystemPage />} />

          <Route path="/support/user" element={<UserSupportPage />} />

          <Route path="/help" element={<HelpPage />} />

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
