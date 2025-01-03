import {
  BasicSettings,
  PersonalInfo,
  Work
} from './blocks';

const AccountUserProfileContent = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-7.5">
      <div className="col-span-1">
        <div className="grid gap-5 lg:gap-7.5">
          <PersonalInfo />

          <BasicSettings title="Basic Settings" />

          <Work />

        </div>
      </div>

    </div>
  );
};

export { AccountUserProfileContent };
