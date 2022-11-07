import { useMemo } from "react";
import { EditorPropertyThemeProvider } from "../theme";
import * as themes from "../theme-one";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const withTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;
  const theme = useMemo(() => themes[themeKey] || themes["light"], [themeKey]);

  return (
    <EditorPropertyThemeProvider theme={theme}>
      <Story />
    </EditorPropertyThemeProvider>
  );
};

export const decorators = [withTheme];

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};
