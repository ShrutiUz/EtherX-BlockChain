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
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(values);
    createFundRequest();
  };

  async function createFundRequest() {
    if (!hasEthereum) {
    }
  }

  return (
    <>
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
      </div>
    </>
  );
}
