import { Button } from "@/components/ui/button";

const ButtonPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-50">
      <Button>DEFAULT</Button>
      <Button variant="primary">PRIMARY</Button>
      <Button variant="primaryOutlined">PRIMARY OUTLINED</Button>
      <Button variant="secondary">SECONDARY</Button>
      <Button variant="secondaryOutlined">SECONDARY OUTLINED</Button>
      <Button variant="danger">DANGER</Button>
      <Button variant="dangerOutlined">DANGER OULTINED</Button>
      <Button variant="super">SUPER</Button>
      <Button variant="superOutlined">SUPER OULTINED</Button>
      <Button variant="ghost">GHOST</Button>
      <Button variant="sidebar">SIDEBAR</Button>
      <Button variant="sidebarOutline">SIDEBAR</Button>
    </div>
  );
};

export default ButtonPage;
