import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Mail, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <Button className="" onClick={() => {}}>
        click
      </Button>
      <Input type="text" id="name" placeholder="Name" icon={User} />
      <Input type="email" id="email" placeholder="Email" icon={Mail} />
    </>
  );
}
