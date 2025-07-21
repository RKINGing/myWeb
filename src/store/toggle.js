
import { useDark, useToggle } from "@vueuse/core";

export function useDarkMode() {
  const isDark = useDark({
    storageKey: "isDark",
  });
  
  const toggleDark = useToggle(isDark);
  
  return {
    isDark,
    toggleDark,
  };
}