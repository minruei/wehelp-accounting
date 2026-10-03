import { useState } from "react";

type FormProps = {
  onAdd: (amount: number, desc: string) => void;
};

export default function Form({ onAdd }: FormProps) {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  function handleAdd() {
    // 沒填就不新增
    if (amount === "" || desc === "") return;

    // 支出變負數
    const num = type === "expense" ? -Number(amount) : Number(amount);
    onAdd(num, desc);

    // 清空輸入框
    setAmount("");
    setDesc("");
  }

  return (
    <div className="form">
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
      <input
        type="number"
        placeholder="金額"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="說明"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="btn" onClick={handleAdd}>
        新增紀錄
      </button>
    </div>
  );
}