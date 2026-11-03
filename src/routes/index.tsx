import { createFileRoute } from "@tanstack/react-router";
import { MenuBoard } from "@/components/menu-board";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <MenuBoard />;
}
