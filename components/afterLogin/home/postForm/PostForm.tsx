"use client";
import Image from "next/image";
import styles from "./PostForm.module.css";
import avatar from "@/public/vercel.svg";
import {useRef} from "react";

const PostForm = () => {
  const imageFile = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.postForm_container}>
      <div className={styles.postForm_firstRow}>
        <div>
          <Image src={avatar} alt="avatarImg" />
        </div>
        <form action="">
          <legend hidden>내용작성</legend>
          <label htmlFor="textForm" hidden>
            내용
          </label>
          <textarea placeholder="무슨 일이 일어나고 있나요?" id="textForm" />
        </form>
      </div>
      <div className={styles.postForm_secondRow}>
        <form action="">
          <legend hidden>파일작성하기</legend>
          <label htmlFor="picFile" hidden>
            파일선택
          </label>
          <input type="file" name="" id="picFile" ref={imageFile} hidden />
          <button>파일첨부</button>
        </form>
        <button type="submit">개시하기</button>
      </div>
    </div>
  );
};
export default PostForm;
