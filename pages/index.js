/* eslint-disable @next/next/link-passhref */
import styles from "../styles/home.module.css";
import { useRouter } from "next/router";
import logo from "../public/logo.png";
import Image from "next/image";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { authenticate, authError, isAuthenticated, user, logout } =
    useMoralis();
  const router = useRouter();
  const handleClickInvestor = (e) => {
    e.preventDefault();
    if (!isAuthenticated) alert("Please connect wallet first!");
    else router.push("/investor");
  };
  const handleClickAsker = (e) => {
    e.preventDefault();
    if (!isAuthenticated) alert("Please connect wallet first!");
    else router.push("/asker");
  };
  const handleAdmin = (e) => {
    e.preventDefault();
    if (isAuthenticated) logout();
    else router.push("/admin");
  };
  // if (authError) alert(`${authError.name} ${authError.message}`);
  return (
    <>
      <div className={styles.parent_Welcome}>
        <div className={styles.navbar}>
          <div className={styles.logos}>
            <div>
              <Image src={logo} alt="EtherX" height="50px" width="45px" />
            </div>
            <div className={styles.dummy}></div>
            <div className={styles.logoName}>EtherX</div>
          </div>

          <div className={styles.buttons}>
            {authError && (
              <div>
                {authError.name}
                {authError.message}
              </div>
            )}

            <button
              disabled={isAuthenticated}
              id="wallet"
              className={styles.walletBtn}
              onClick={authenticate}
            >
              {isAuthenticated
                ? `${user.attributes.ethAddress} Connected`
                : "Connect Wallet"}
            </button>

            <div></div>

            <button
              id="admin"
              className={styles.adminBtn}
              onClick={handleAdmin}
            >
              {!isAuthenticated ? "Admin" : "Logout"}
            </button>
          </div>
        </div>
        <div className={styles.welcome_msg}>
          <h1>Welcome to EtherX</h1>
        </div>
        <div className={styles.choose_profile}>
          <div className={styles.profile_investor}>
            <a onClick={handleClickInvestor}>I want to invest</a>
          </div>
          <div className={styles.profile_asker}>
            <a onClick={handleClickAsker}>I want funding</a>
          </div>
        </div>
      </div>
    </>
  );
}
