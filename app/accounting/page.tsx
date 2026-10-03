'use client'

import { useState } from 'react'
import Link from 'next/link'
import Form from '@/components/Form'
import List, { Item } from '@/components/List'

export default function AccountingPage() {
  // 負數是支出，正數是收入
  const [items, setItems] = useState<Item[]>([
    { id: 1, amount: -1200, desc: '吃大餐' },
    { id: 2, amount: -500, desc: '咖啡十杯' },
    { id: 3, amount: -200, desc: '生活用品' },
    { id: 4, amount: 50000, desc: '十月份薪資' },
  ])

  // 新增紀錄
  function addItem(amount: number, desc: string) {
    const newItem: Item = { id: Date.now(), amount, desc }
    setItems([...items, newItem])
  }

  // 刪除紀錄
  function deleteItem(id: number) {
    setItems(items.filter((item) => item.id !== id))
  }

  // 算小計
  let total = 0
  for (const item of items) {
    total += item.amount
  }

  return (
    <main className="container">
      <Form onAdd={addItem} />
      <List items={items} onDelete={deleteItem} />

      <p className="total">小計：{total}</p>

      <div className="start">
        <Link href="/" className="btn">
          返回首頁
        </Link>
      </div>
    </main>
  )
}
