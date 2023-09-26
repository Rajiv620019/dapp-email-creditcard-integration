import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Nav = () => {
  const walletAddress = useAddress();

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div>
          <Link href="/">
            <h3>Neymar Artwork</h3>
          </Link>
        </div>
        <div>
          {!walletAddress ? (
            <ConnectWallet btnTitle="Login" />
          ) : (
            <Link href={`/profile/${walletAddress}`}>
              <img
                src="https://avatars.githubusercontent.com/u/81866624?v=4"
                alt="avatar"
                className={styles.avatar}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
