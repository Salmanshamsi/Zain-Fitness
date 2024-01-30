export enum SelectedPage {
  'HOME' = "HOME",
  'ABOUT' = "ABOUT",
  'BENEFITS' = "BENEFITS",
  'CONTACT' = "CONTACT",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
