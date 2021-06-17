import React from "react";
import styled from "@emotion/styled";
import { SEPARATOR_ITEM, styles } from "@editor-ui/menu";
import { Separator as _Separator } from "@radix-ui/react-context-menu";

export { SEPARATOR_ITEM };

export const ContextMenuSeparator = styled(_Separator)(styles.separatorStyle);
