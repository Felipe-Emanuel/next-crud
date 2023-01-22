import { Title } from "./Title";

interface LayoutProps {
  title: string;
  children: any;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-800 rounded-md">
      <Title title={title} />
      <div className="p-6">{children}</div>
    </div>
  );
}
