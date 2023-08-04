import { ReactElement, ReactNode } from "react";
import { CustomClasses } from "../../theme/theme.types";
import { UrlObject } from "url";

export interface BreadcrumbItemProps extends CustomClasses<"root"> {
  children?: ReactNode | ReactElement;
  icon?: ReactNode | ReactElement;
  href?: string | UrlObject;
}
