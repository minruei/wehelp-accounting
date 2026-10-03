// 一筆紀錄的格式
export type Item = {
    id: number;
    amount: number;
    desc: string;
  };
  
  type ListProps = {
    items: Item[];
    onDelete: (id: number) => void;
  };
  
  export default function List({ items, onDelete }: ListProps) {
    return (
      <ul className="list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <span className={item.amount < 0 ? "amount expense" : "amount income"}>
              {item.amount}
            </span>
            <span className="desc">{item.desc}</span>
            {/* 要包 () =>，不然會直接執行 */}
            <button className="btn" onClick={() => onDelete(item.id)}>
              刪除
            </button>
          </li>
        ))}
      </ul>
    );
  }