import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import LinkButton from "@/components/common/LinkButton";
import { Mail, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <Button type="button" variant="icon">
        click
      </Button>
      <Input type="text" id="name" placeholder="Name" icon={User} />
      <Input type="email" id="email" placeholder="Email" icon={Mail} />
      <LinkButton href="/test" variant="text">
        點我啊～～
      </LinkButton>
    </>
  );
}
