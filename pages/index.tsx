import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Indonesia Battle Warrior - Patimura NFT</h1>
      <div className={styles.nftBoxGrid}>
       

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your Patimura NFTs</h2>
          <p className={styles.selectBoxDescription}>
          Stake your Patimura NFTs <b>on Our Staking</b>{" "}
            and earn a lot of ICN tokens from the <b>Our Staking</b> Contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
