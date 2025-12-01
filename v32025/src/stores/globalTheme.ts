import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { darkTheme, lightTheme, useOsTheme } from "naive-ui";

/**
 * @author Leroy
 * 存放全局主题css
 */

export const useThemeStore = defineStore("counter", () => {
  const osTheme = useOsTheme();
  const manualTheme = ref<string | null>(null);

  const setManualTheme = (theme: "dark" | "light" | null) => {
    manualTheme.value = theme;
  };

  const theme = computed(() => {
    if (manualTheme.value !== null) {
      if (osTheme.value === "dark") {
        return darkTheme;
      }
    } else if (manualTheme.value === "dark") {
      return darkTheme;
    }
    return lightTheme;
  });

  return { theme, setManualTheme };
});
