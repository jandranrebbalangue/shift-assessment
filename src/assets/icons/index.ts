import profile from "./svg/profile.svg";
import people from "./svg/people.svg";
import account from "./svg/account.svg";
import security from "./svg/security.svg";
import social from "./svg/social.svg";
import folder from "./svg/folder.svg";
import billing from "./svg/billing.svg";
import question from "./svg/question.svg";
import workspace from "./svg/workspace.svg";

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
