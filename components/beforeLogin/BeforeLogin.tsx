import Image from "next/image";
import styles from "./BeforeLogin.module.css";
import logo from "@/public/next.svg";
import Link from "next/link";
export default function BeforeLogin() {
  return (
    <>
      <div className={styles.logo_img}>
        <Image src={logo} alt="img" />
      </div>
      <div className={styles.login_form}>
        <div className={styles.signup}>
          <h1>지금 일어나고 있는 일</h1>
          <h2>지금 가입하세요</h2>
          <Link href={"/i/flow/singup"}>계정만들기</Link>
        </div>
        <div className={styles.login}>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link href={"/login"}>로그인</Link>
        </div>
      </div>
    </>
  );
}
