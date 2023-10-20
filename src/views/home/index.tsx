import { Button } from 'antd'
import React, { useState } from 'react'

export default function Home() {
  const [sysInfo, setSysInfo] = useState<{
    freeMemory: number,
    totalMemory: number
  }>(null);
  const getSysInfoHandle = async () => {
    const { freeMemory, totalMemory } = await window.os.getSystemInfo();
    setSysInfo({
      freeMemory,
      totalMemory
    })
  }
  return (
    <div>
      <p>总内存: {sysInfo?.totalMemory || '-'}</p>
      <p>空闲内存: {sysInfo?.freeMemory || '-'}</p>
      <p>已用内存: {sysInfo?.totalMemory - sysInfo?.freeMemory || '-'}</p>
      <p>使用占比: {(sysInfo?.totalMemory - sysInfo?.freeMemory) / sysInfo?.totalMemory || '-'}</p>

      <Button onClick={getSysInfoHandle}>获取系统信息</Button>
    </div>
  )
}
