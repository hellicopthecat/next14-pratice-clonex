import Image from "next/image";
import styles from "./afterLogin.module.css";
import logo from "@/public/next.svg";
import avatar from "@/public/vercel.svg";
import Link from "next/link";
import NavMenu from "@/components/afterLogin/navigation/NavMenu";
import Trend from "@/components/afterLogin/rightSide/Trend";
export default function AfterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSection_fixed}>
            <div className={styles.logo}>
              <Link href={"/home"}>
                <Image src={logo} alt="로고이미지" width={120} />
              </Link>
            </div>
            <nav className={styles.navigation}>
              <NavMenu />
              <Link href={"/compose/tweet"}>글 작성하기</Link>
            </nav>
            <div className={styles.profile}>
              <Image src={avatar} alt="로고이미지" width={120} />
              <button>로그아웃하기</button>
            </div>
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSection}>
          <main className={styles.section_main}>{children}</main>
          <section className={styles.section_right}>
            <div className={styles.section_formCont}>
              <form className={styles.section_form}>
                <legend hidden>검색</legend>
                <label htmlFor="search" hidden>
                  검색
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="검색어를 입력해주세요"
                />
              </form>
            </div>
            <Trend />
          </section>
        </div>
      </div>
    </div>
  );
}
