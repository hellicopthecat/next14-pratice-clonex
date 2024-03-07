"use client";
import {useRouter} from "next/navigation";
import styles from "./Modal.module.css";
const LoginModal = () => {
  const router = useRouter();
  const goHome = () => {
    router.replace("/");
    router.refresh();
  };
  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_formCont}>
        <button onClick={goHome}>X</button>
        <h2>로그인</h2>
        <form action="">
          <legend hidden>로그인</legend>
          <div>
            <label htmlFor="userId" hidden>
              아이디
            </label>
            <input id="userId" type="text" placeholder="아이디" />
          </div>
          <div>
            <label htmlFor="password" hidden>
              비밀번호
            </label>
            <input id="password" type="text" placeholder="비밀번호" />
          </div>
          <button>로그인하기</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
