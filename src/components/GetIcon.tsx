import profile from "/assets/icons/svg/profile.svg";
import people from "/assets/icons/svg/people.svg";
import account from "/assets/icons/svg/account.svg";
import security from "/assets/icons/svg/security.svg";
import social from "/assets/icons/svg/social.svg";
import folder from "/assets/icons/svg/folder.svg";
import billing from "/assets/icons/svg/billing.svg";
import question from "/assets/icons/svg/question.svg";
import workspace from "/assets/icons/svg/workspace.svg";

type IconsProps = {
  profile: string;
  people: string;
  account: string;
  security: string;
  social: string;
  folder: string;
  billing: string;
  question: string;
  workspace: string;
};
export type IconProps = keyof IconsProps;
const icons = {
  profile,
  people,
  account,
  security,
  social,
  folder,
  billing,
  question,
  workspace,
};

export const getIcon = (name: IconProps) => {
  return icons[name];
};

