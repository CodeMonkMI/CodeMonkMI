import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  if (theme === "dark") {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full "
        onClick={() => setTheme("light")}
      >
        <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={() => setTheme("dark")}
      >
        <Sun className="w-5 aspect-square transition-all" />
      </Button>
    </>
  );
}

export function MobileThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="px-2"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </Toggle>
  );
}
