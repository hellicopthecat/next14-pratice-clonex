import BeforeLogin from "@/components/beforeLogin/BeforeLogin";
import {useRouter} from "next/navigation";

export default function Signup() {
  const router = useRouter();
  router.replace("/i/flow/signup");
  return <BeforeLogin />;
}
