"use client";

import BeforeLogin from "@/components/beforeLogin/BeforeLogin";
import {useRouter} from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <BeforeLogin />;
}
