import { Button, Input, Image } from 'antd'
import React from 'react'
import icon from '@/assets/icon.png'


export default function HeaderBar() {
  return (
    <div style={{ height: 40, backgroundColor: 'rgb(76, 117, 242)', paddingLeft: 80, paddingRight: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <Image src={icon} style={{ width: 30, height: 30, borderRadius: 5 }} />
      <Input.Search placeholder="Search some things" style={{ width: '70%', maxWidth: 370 }} />
      <Button type="dashed">新增</Button>
    </div>
  )
}
