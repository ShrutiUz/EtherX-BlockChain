<<<<<<< HEAD
import styles from "../styles/askerForm.module.css";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import router from "next/router";
import { ethers } from "ethers";
import { hasEthereum } from "../utils/ethereum";
import logo from "../public/man.png";
import backBtn from "../public/backBtn.png";
import Image from "next/image";
import Clock from "react-digital-clock";
import CrowdFunding from "../src/artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import Marquee from "react-fast-marquee";
export default function Asker() {
  // console.log(typeof window);
  const { isAuthenticated, user, isUserUpdating, setUserData } = useMoralis();
  const [connectedWalletAddress, setConnectedWalletAddressState] = useState("");
  const initialValues = {
    description: "",
    target: "",
    deadline: "",
    boolean: "",
    percent: "",
  };
  const [message, setMessage] = useState(
    "Nothing to display yet. Please create a fund request!"
  );
  const [amount, setAmount] = useState(0);
  const [values, setValues] = useState(initialValues);
  const handleClickBack = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const handleInputChange = (e) => {
=======
import { useState } from "react";
import styles from "../styles/asker.module.css";
import hasEthereum from "../utils/ethereum";

export default function Asker() {
  const initialValues = {
    name: "",
    description: "",
    target: "",
    deadline: "",
    profitPercentage: "",
    boolean: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
>>>>>>> 544784d68f66efc2917e7c7f4c784eb947d70a07
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
<<<<<<< HEAD
=======

>>>>>>> 544784d68f66efc2917e7c7f4c784eb947d70a07
  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    createFundRequest();
<<<<<<< HEAD
    setValues(initialValues);
    // setTimeout(() => {
    //   router.push("/");
    // }, 1000);
  };
  // If wallet is already connected...
  useEffect(() => {
    if (!hasEthereum()) {
      setConnectedWalletAddressState(
        `MetaMask unavailable, Please install metamask first!`
      );
      return;
    }
    async function setConnectedWalletAddress() {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const signerAddress = await signer.getAddress();
        setConnectedWalletAddressState(signerAddress);
      } catch {
        setConnectedWalletAddressState("No wallet connected");
        return;
      }
    }
    setConnectedWalletAddress();
  }, []);

  // Request access to MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function createFundRequest() {
    if (!hasEthereum()) {
      setConnectedWalletAddressState(`MetaMask unavailable`);
      return;
    }
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    setConnectedWalletAddressState(signerAddress);
    const contract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CROWDFUNDING_ADDRESS,
      CrowdFunding.abi,
      signer
    );
    // values.boolean = values.boolean == 0 ? false : true;
    const transaction = await contract.createFundRequest(
      values.description,
      values.target,
      values.deadline,
      values.percent,
      values.boolean
    );
    await transaction.wait();
    console.log(transaction);
    setMessage(
      `Fund Request created successfully! Transaction deployed to ${process.env.NEXT_PUBLIC_CROWDFUNDING_ADDRESS}`
    );
    setAmount(values.target);
    // alert("Fund request created!");
    // router.push("/");
=======
  };

  async function createFundRequest() {
    if (!hasEthereum) {
    }
>>>>>>> 544784d68f66efc2917e7c7f4c784eb947d70a07
  }

  return (
    <>
<<<<<<< HEAD
      <div className={styles.bodyClass}>
        <div className={styles.askerDetailsMaster}>
          <div className={styles.backBtn}>
            <button onClick={handleClickBack}>
              {" "}
              <Image src={backBtn} alt="EtherX" height="30px" width="60px" />
            </button>
          </div>
          <div className={styles.askerDetails}>
            <Image src={logo} alt="EtherX" height="120px" width="120px" />
            <p className={styles.connectedWallet}>Connected Wallet :</p>
            <Marquee
              className={styles.marquee}
              pauseOnHover
              gradient={false}
              speed={50}
            >
              {connectedWalletAddress}
            </Marquee>
            <Clock />
            <div className={styles.messageArea}>
              <h2>Last Transaction</h2>
              <p>{message}</p>
              {amount > 0 && (
                <p>
                  Amount asked : <span>{amount} Wei</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={styles.boxWrapper}>
          <textarea
            type="textarea"
            rows="6"
            value={values.description}
            name="description"
            placeholder="Description"
            onChange={handleInputChange}
            autoComplete="off"
            autoSave="off"
            required
          />
          <div className={styles.dummy}></div>
          <input
            type="text"
            value={connectedWalletAddress}
            autoComplete="none"
            readOnly={true}
            required
          />
          <div className={styles.dummy}></div>
          <input
            type="number"
            step="1000"
            name="target"
            value={values.target}
            onChange={handleInputChange}
            placeholder="Target(in Wei)"
            required
          />
          <div className={styles.dummy}></div>
          <input
            type="number"
            name="deadline"
            value={values.deadline}
            onChange={handleInputChange}
            placeholder="Deadline(in days)"
            step="1"
            required
          />
          <div className={styles.dummy}></div>
          <input
            type="number"
            name="boolean"
            value={values.boolean}
            onChange={handleInputChange}
            placeholder="Accept fund if target is not met? (0 or 1)"
            required
          />
          <div className={styles.dummy}></div>
          <input
            type="number"
            name="percent"
            value={values.percent}
            onChange={handleInputChange}
            placeholder="Profit percentage to investors (%)"
            step="0.01"
            required
          />
          <div className={styles.dummy}></div>
          <button type="submit" onClick={handleClick} disabled={isUserUpdating}>
            Create Fund Request
          </button>
        </div>
=======
      <div className={styles.master}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h2>Create Fund Request</h2>
          </div>
          <div className={styles.form}>
            <input
              type="text"
              id="askerName"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="off"
            />
            <div className={styles.dummy}></div>
            <textarea
              placeholder="Description"
              rows="3"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            <div className={styles.dummy}></div>
            <input
              type="number"
              id="askerTarget"
              placeholder="Target"
              name="target"
              value={values.target}
              onChange={handleChange}
            />
            <div className={styles.dummy}></div>
            <input
              type="number"
              id="askerDeadline"
              placeholder="Deadline"
              name="deadline"
              value={values.deadline}
              onChange={handleChange}
            />
            <div className={styles.dummy}></div>
            <input
              type="number"
              id="askerBool"
              placeholder="Will you accept the raised fund if less than target?"
              name="boolean"
              value={values.boolean}
              onChange={handleChange}
            />
            <div className={styles.dummy}></div>
            <input
              type="number"
              id="askerProftPercentage"
              placeholder="Profit percentage to investor(%)"
              name="profitPercentage"
              value={values.profitPercentage}
              onChange={handleChange}
            />
            <div className={styles.dummy}></div>
            <div>
              <button onClick={handleClick}>Create</button>
            </div>
          </div>
        </div>
>>>>>>> 544784d68f66efc2917e7c7f4c784eb947d70a07
      </div>
    </>
  );
}
